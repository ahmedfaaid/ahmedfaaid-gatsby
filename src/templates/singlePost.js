import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
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
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageCreator
        imageLink
      }
    }
  }
`;

export default function singlePost({ data: { mdx } }) {
  return (
    <Layout>
      <h1 className='justify-center text-center text-2xl text-secondary font-heading font-semibold my-4'>{mdx.frontmatter.title}</h1>
      <div className='px-4'>
        <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
        <p className='my-4 text-center font-body'>
          Photo by
          {' '}
          <a href={mdx.frontmatter.imageLink} target='_blank' rel='noreferrer noopener' className='text-primary'>{mdx.frontmatter.imageCreator}</a>
          {' '}
          on Unsplash
        </p>
        <p className='font-body italic font-light text-lg text-center py-3'>{mdx.frontmatter.description}</p>
        <div>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
}

singlePost.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
