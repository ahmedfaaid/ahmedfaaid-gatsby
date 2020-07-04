/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './Layout.css';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Ahmed Faaid</title>
        <link href='hamburgers.css' rel='stylesheet' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css'
        />
        <script
          src='https://kit.fontawesome.com/163b6190b4.js'
          crossOrigin='anonymous'
        >
        </script>
      </Helmet>
      <div className='relative min-h-screen'>
        <Header />
        <div className='container pb-16'>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
