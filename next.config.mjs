import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let userConfig = undefined;

try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  console.warn('Optional user config not found: ./v0-user-next.config');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        stream: require.resolve('stream-browserify'),
      },
      fallback: {
        fs: false,
        net: false,
        tls: false,
      },
    };
    return config;
  },
};

mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }
  for (const key in userConfig) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
