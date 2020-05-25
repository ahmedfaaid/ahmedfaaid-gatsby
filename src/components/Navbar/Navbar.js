import React from 'react';

export default function Navbar() {
  return (
    <nav className='bg-gray-400 py-6'>
      <div className='container'>
        <h1>Ahmed Faaid</h1>
        <div className='hidden'>
          <ul>
            <li className='mb-3'>Blog</li>
            <li className='mb-3'>Projects</li>
            <li className='mb-3'>About</li>
            <li className='mb-3'>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
