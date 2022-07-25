/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
        imageCreator
        imageLink
      }
    }
  }
`;

export default function singlePost({ data: { mdx } }) {
  const image = getImage(mdx.frontmatter.featuredImage);
  const imgSrc = getSrc(mdx.frontmatter.featuredImage);

  return (
    <Layout
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.description}
      image={imgSrc}
      article
    >
      <h1 className='font-heading text-2xl sm:text-4xl text-white text-center my-4 w-full sm:w-2/3 mx-auto'>
        {mdx.frontmatter.title}
      </h1>
      <div className='px-4 w-full sm:w-2/3 mx-auto'>
        <GatsbyImage
          image={image}
          alt={mdx.frontmatter.title}
          className='w-full'
          objectFit='contain'
        />
        <p className='my-4 text-center font-body text-white'>
          Photo by{' '}
          <a
            href={mdx.frontmatter.imageLink}
            target='_blank'
            rel='noreferrer noopener'
            className='text-primary'
          >
            {mdx.frontmatter.imageCreator}
          </a>{' '}
          on Unsplash
        </p>
        <p className='font-body italic font-light text-lg text-center text-white py-3'>
          {mdx.frontmatter.description}
        </p>
        <div className='mb-4 w-full'>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
}

singlePost.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
