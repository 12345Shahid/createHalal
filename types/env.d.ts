declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FIREBASE_PROJECT_ID: string;
      FIREBASE_CLIENT_EMAIL: string;
      FIREBASE_PRIVATE_KEY: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {}; 