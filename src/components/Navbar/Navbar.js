import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openModalHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='py-6 text-primary border-b-2 border-primary border-opacity-50'>
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
          className={`hamburger hamburger--spring z-20 ${
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
          menuOpen ? 'flex' : 'hidden'
        } justify-center items-center text-center bg-dark-1 absolute top-0 left-0 h-full w-full z-10`}
      >
        <ul>
          <li className='mb-3 py-4 text-2xl tracking-wide font-light'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='mb-3 py-4 text-2xl tracking-wide font-light'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='mb-3 py-4 text-2xl tracking-wide font-light'>
            <Link to='/about'>About</Link>
          </li>
          <li className='mb-3 py-4 text-2xl tracking-wide font-light'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
