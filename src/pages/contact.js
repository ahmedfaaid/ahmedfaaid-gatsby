/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title='Contact'>
      <h1 className='font-heading text-4xl text-primary text-center my-4'>Contact</h1>
      <section>
        <div className='bg-dark-3 w-5/6 md:w-2/3 lg:w-1/3 m-auto mb-2 py-2'>
          <h2 className='font-heading text-2xl text-white text-center my-4'>Get In Touch</h2>
          <form
            className='w-full p-4 text-center'
            method='post'
            netlify-honeypot='bot-field'
            data-netlify='true'
            name='contact'
          >
            <div>
              <label htmlFor='name' />
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='w-full bg-dark-6 text-white rounded p-2 my-4'
              />
            </div>
            <div>
              <label htmlFor='email' />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='w-full bg-dark-6 text-white rounded p-2 my-4'
              />
            </div>
            <div>
              <label title='Message' htmlFor='message' />
              <textarea
                name='message'
                placeholder='Message'
                className='w-full h-40 bg-dark-6 text-white rounded p-2 my-4'
              />
            </div>
            <input type='hidden' name='bot-field' />
            <input type='hidden' name='form-name' value='contact' />
            <div>
              <button
                type='submit'
                className='bg-primary hover:bg-secondary px-12 py-4 rounded-full text-white text-lg'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
