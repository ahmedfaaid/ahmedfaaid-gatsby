import React from 'react';
import { Link } from 'gatsby';
import Post from '../Post/Post';

export default function LatestPosts() {
  return (
    <section className='bg-gray-100 py-8 px-6'>
      <div className='flex justify-between items-center'>
        <h2 className='font-heading font-semibold text-xl py-4 text-secondary'>
          Latest Posts
        </h2>
        <Link to='/blog' className='text-primary'>All posts</Link>
      </div>
      <Post number={1} />
      <Post number={2} />
      <Post number={3} />
      <Post number={4} />
    </section>
  );
}
