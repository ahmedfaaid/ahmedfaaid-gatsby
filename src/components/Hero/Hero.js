import React from 'react';
import SocialButton from '../SocialButton/SocialButton';

export default function Hero() {
  return (
    <section className='w-full flex justify-center items-center my-24 px-4'>
      <div>
        <h1 className='text-white text-3xl font-body font-semibold'>
          Hey, I&apos;m Ahmed Faaid
        </h1>
        <p className='text-white text-lg font-body font-light mt-3'>
          I&apos;m a freelance web and software developer
        </p>
        <p className='text-white text-lg font-body font-light mt-3'>
          I love to work with React(Gatsby and Next) and Node
        </p>
        <div className='text-center mt-8'>
          <SocialButton name='twitter' />
          <SocialButton name='github' />
        </div>
      </div>
    </section>
  );
}
