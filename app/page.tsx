import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Create Amazing Halal Content with AI
            </h1>
            <p className="text-xl mb-8">
              Discover an all-in-one platform built to help you create amazing content,
              boost your marketing, and streamline your programming tasks – all while
              staying true to Halal values.
            </p>
            <Button size="lg">Get Started</Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/api/placeholder/800/600"
              alt="Hero illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      {/* Additional sections will go here */}
    </div>
  );
};

export default Home;
