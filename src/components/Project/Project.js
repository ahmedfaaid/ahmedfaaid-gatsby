import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import './Project.css';

export default function Project({ project }) {
  return (
    <div className='card bg-dark-3 w-4/5 m-auto rounded-sm shadow-md mb-12 p-3 text-center'>
      <a
        href={project.deployed}
        target='_blank'
        rel='noreferrer noopener'
      >
        <Img fluid={project.image.childImageSharp.fluid} />
      </a>
      <a
        href={project.deployed}
        target='_blank'
        rel='noreferrer noopener'
      >
        <h2 className='font-heading text-xl text-white text-center my-5'>{project.name}</h2>
      </a>
      <a
        href={project.deployed}
        target='_blank'
        rel='noreferrer noopener'
      >
        <p className='font-body text-white text-center italic'>{project.description}</p>
      </a>
      <a
        href={project.github}
        target='_blank'
        rel='noreferrer noopener'
        className='bg-github-white text-github-dark px-6 py-2 inline-block my-6 w-48 rounded'
      >
        <i className='fab fa-github mr-1' />
        {' '}
        Project GitHub
      </a>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};
