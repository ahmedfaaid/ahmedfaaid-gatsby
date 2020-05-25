import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Layout.css';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link href='../static/hamburgers.css' rel='stylesheet' />
      </Helmet>
      <Header />
      <div className='container'>
        <main>{children}</main>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
