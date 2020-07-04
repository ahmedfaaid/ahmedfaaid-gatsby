import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openModalHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='py-6 text-primary border-b-2 border-primary border-opacity-50 md:relative'>
      <div className='flex justify-between items-center pl-4 pr-1'>
        <div>
          <Link
            to='/'
            className='text-xl font-heading font-light tracking-wider'
          >
            Ahmed F
          </Link>
        </div>
        <button
          className={`inline-block md:hidden hamburger hamburger--spring z-20 ${
            menuOpen ? 'is-active' : ''
          }`}
          type='button'
          onClick={openModalHandler}
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner' />
          </span>
        </button>
      </div>
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden md:flex'
        } justify-center md:justify-end items-center text-center bg-dark-1 md:bg-transparent absolute top-0 md:top-1/2 right-0 h-full md:h-auto w-full md:w-auto z-10 md:pr-4 md:transform md:-translate-y-1/2`}
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
