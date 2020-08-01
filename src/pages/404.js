import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default function Error() {
  return (
    <Layout>
      <div className='text-center'>
        <h1 className='font-heading text-4xl text-primary text-center my-4'>Oops the route doesn&apos;t exist</h1>
        <Link to='/' className='text-primary'>
          Back to home
          {' '}
          <span>&rarr;</span>
        </Link>
      </div>
    </Layout>
  );
}
