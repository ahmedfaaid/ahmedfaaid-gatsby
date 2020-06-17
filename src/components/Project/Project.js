import React from 'react';
import PropTypes from 'prop-types';

export default function Project({ name }) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
};
