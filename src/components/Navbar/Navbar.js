/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openModalHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='py-6 text-primary border-b-2 border-primary border-opacity-50 md:relative w-full'>
      <div className='w-full md:w-3/4 lg:2/3 mx-auto px-4 flex justify-between'>
        <div className='inline-flex justify-between items-center w-full sm:w-auto px-4 md:mx-6'>
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
            menuOpen ? 'flex' : 'hidden md:inline-flex'
          } justify-center md:justify-end items-center text-center bg-dark-1 md:bg-transparent absolute md:relative top-0 right-0 h-screen md:h-auto md:w-auto z-10 md:pr-4 md:mr-6 w-full`}
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
      </div>
    </nav>
  );
}
