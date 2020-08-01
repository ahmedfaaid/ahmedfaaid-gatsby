import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default function Error() {
  return (
    <Layout>
      <h1>Oops the route doesn&apos;t exist</h1>
      <Link to='/'>
        Back to home
        {' '}
        <span>&rarr;</span>
      </Link>
    </Layout>
  )
}
