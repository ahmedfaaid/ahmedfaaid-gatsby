/* eslint-disable max-len */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';

export const aboutQuery = graphql`
  query {
    file(relativePath: {eq: "ahmed-w2000.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allSkillsJson {
      nodes {
        name
        icon
      }
    }
  }
`;

export default function About() {
  const { file, allSkillsJson } = useStaticQuery(aboutQuery);

  return (
    <Layout title='About'>
      <h1 className='font-heading text-4xl text-primary text-center my-4'>About</h1>
      <section>
        <Img
          fluid={file.childImageSharp.fluid}
          alt='Ahmed Faaid'
          className='w-5/6 lg:w-2/3 m-auto'
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
          <h2 className='font-heading text-2xl text-white text-center my-4'>Skills</h2>
          <div className='bg-dark-3 w-5/6 mx-auto my-4 rounded-sm shadow-md p-3 flex flex-wrap justify-center'>
            <>
              {allSkillsJson.nodes.map(node => (
                <div className='w-1/2 md:w-1/3 m-auto text-center text-white p-8' key={node.name}>
                  <i className={`${node.icon} text-3xl`} />
                  <p className='mt-2'>{node.name}</p>
                </div>
              ))}
            </>
          </div>
        </div>
      </section>
    </Layout>
  );
}
