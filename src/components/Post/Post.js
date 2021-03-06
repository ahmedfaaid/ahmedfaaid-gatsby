import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

export default function Post({
  title,
  description,
  slug,
  fluid,
}) {
  return (
    <div className='bg-dark-3 w-4/5 m-auto rounded-sm shadow-md mb-12 p-3'>
      <Link to={`/${slug}`}>
        <Img
          className='w-full m-auto mb-8'
          fluid={fluid}
          alt='Blog Image'
        />
      </Link>
      <Link to={`/${slug}`}>
        <h3 className='font-heading text-xl text-white my-5'>{title}</h3>
      </Link>
      <Link to={`/${slug}`}>
        <p className='font-body italic font-light text-lg text-white py-3'>
          {description}
        </p>
      </Link>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  fluid: PropTypes.instanceOf(Object).isRequired,
};
