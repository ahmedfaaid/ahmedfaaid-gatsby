import React from 'react';
import PropTypes from 'prop-types';

export default function SocialButton({ name }) {
  return (
    <a
      href={name === 'twitter' ? 'https://twitter.com/mr_amed' : 'https://github.com/ahmedfaaid'}
      target='_blank'
      rel='noreferrer noopener'
      className={`${
        name === 'twitter'
          ? 'bg-twitter-blue text-white'
          : 'bg-github-white text-github-dark'
      } block my-6 sm:my-0 sm:inline-block px-6 py-2 w-32 rounded mx-auto sm:mx-4`}
    >
      <i className={`fab fa-${name} mr-1`} />
      {' '}
      {name}
    </a>
  );
}

SocialButton.propTypes = {
  name: PropTypes.string.isRequired,
};
