import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-primary absolute w-full bottom-0 h-16 flex items-center justify-center'>
      <div>
        <ul className='flex justify-center'>
          <li>
            <a
              href='https://twitter.com/mr_amed'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-twitter text-xl mx-3'
            >
              <i className='fab fa-twitter' />
            </a>
          </li>
          <li>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-youtube text-xl mx-3'
            >
              <i className='fab fa-github' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
