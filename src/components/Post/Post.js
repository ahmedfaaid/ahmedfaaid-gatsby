import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default function Post({ number }) {
  return (
    <div className='bg-white my-5 p-2 rounded-sm border-b-2 border-primary border-opacity-50 shadow-md'>
      <Link to='/'>
        <h3 className='font-heading text-xl'>{`Post ${number}`}</h3>
      </Link>
      <p className='font-body italic font-light text-lg py-3'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
  number: PropTypes.number.isRequired,
};
