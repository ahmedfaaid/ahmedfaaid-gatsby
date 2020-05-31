import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default function Post({ title, description }) {
  return (
    <div className='bg-white my-5 p-2 rounded-sm border-b-2 border-primary border-opacity-50 shadow-md'>
      <Link to='/'>
        <h3 className='font-heading text-xl'>{title}</h3>
      </Link>
      <p className='font-body italic font-light text-lg py-3'>
        {description}
      </p>
      <Link to='/' className='text-primary'>
        Read more
        {' '}
        <span>&rarr;</span>
      </Link>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
