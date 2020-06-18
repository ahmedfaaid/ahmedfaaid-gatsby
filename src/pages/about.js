/* eslint-disable max-len */
import React from 'react';
import { StaticQuery, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

export const imageQuery = graphql`
  query {
    file(relativePath: {eq: "ahmed-w1000.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function About() {
  const myImage = useStaticQuery(imageQuery);

  return (
    <Layout>
      <h1 className='font-heading text-4xl text-primary text-center my-4'>About</h1>
      <section>
        <Img
          fluid={myImage.file.childImageSharp.fluid}
          alt='Ahmed Faaid'
          className='w-5/6 m-auto'
        />
        <div className='bg-dark-3 w-5/6 mx-auto my-4 rounded-sm shadow-md p-3'>
          <p className='font-body font-thin text-lg text-white leading-relaxed'>
            I am a web developer based in Hamilton, Canada. I specialize in building websites and web applications using Javascript(ES6+, React and Node).
          </p>
          <br />
          <p className='font-body font-thin text-lg text-white leading-relaxed'>
            I love to build and create stuff. When I&apos;m not coding or learning different technologies, I spend time with my daughter, listen to podcasts, play video games(mostly Destiny 2) or produce some music.
          </p>
        </div>
        <div>
          <h2>Skills</h2>

        </div>
      </section>
    </Layout>
  );
}
