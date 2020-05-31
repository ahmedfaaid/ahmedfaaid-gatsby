import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero/Hero';
import LatestPosts from '../components/LatestPosts/LatestPosts';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <LatestPosts />
    </Layout>
  );
}
