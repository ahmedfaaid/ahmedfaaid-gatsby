import React from 'react';
import PropTypes from 'prop-types';

export default function SocialButton({ name }) {
  return (
    <button
      type='button'
      className={`${
        name === 'twitter'
          ? 'bg-twitter-blue text-white'
          : 'bg-github-white text-github-dark'
      } px-6 py-2 w-32 rounded mx-4`}
    >
      <i className={`fab fa-${name} mr-1`} />
      {' '}
      {name}
    </button>
  );
}

SocialButton.propTypes = {
  name: PropTypes.string.isRequired,
};
