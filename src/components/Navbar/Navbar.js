/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openModalHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='py-6 text-primary border-b-2 border-primary border-opacity-50 md:relative'>
      <div className='flex justify-between items-center px-4 md:mx-6'>
        <div>
          <Link
            to='/'
            className='text-xl font-heading font-light tracking-wider'
          >
            Ahmed F
          </Link>
        </div>
        <div className='block md:hidden z-20'>
          <button
            className='flex items-center px-3 py-2 border rounded text-primary border-primary outline-none focus:outline-none'
            onClick={openModalHandler}
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden md:flex'
        } justify-center md:justify-end items-center text-center bg-dark-1 md:bg-transparent absolute top-0 md:top-1/2 right-0 h-screen md:h-auto w-full md:w-auto z-10 md:pr-4 md:mr-6 md:transform md:-translate-y-1/2`}
      >
        <ul className='md:flex md:items-center'>
          <li className='mb-3 md:mb-0 py-4 text-2xl md:text-xl md:font-heading md:mr-5 tracking-wide font-light'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='mb-3 md:mb-0 py-4 text-2xl md:text-xl md:font-heading md:mr-5 tracking-wide font-light'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='mb-3 md:mb-0 py-4 text-2xl md:text-xl md:font-heading md:mr-5 tracking-wide font-light'>
            <Link to='/about'>About</Link>
          </li>
          <li className='mb-3 md:mb-0 py-4 text-2xl md:text-xl md:font-heading tracking-wide font-light'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
