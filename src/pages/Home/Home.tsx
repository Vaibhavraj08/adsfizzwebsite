import React from 'react';
import { Hero } from '../../components/home/Hero';
import { Services } from '../../components/home/Services';
import { Features } from '../../components/home/Features';
import { Layout } from '../../components/common/Layout';

export const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
    </Layout>
  );
};