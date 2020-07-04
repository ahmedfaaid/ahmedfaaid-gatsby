import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post/Post';

export const allPostsQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default function Blog() {
  return (
    <Layout>
      <h1 className='font-heading text-4xl text-primary text-center my-4'>
        Blog
      </h1>
      <section>
        <StaticQuery
          query={allPostsQuery}
          render={data => {
            const postArray = data.allMdx.nodes;
            return (
              <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2'>
                {postArray.map(({ id, frontmatter, fields }) => (
                  <>
                    <Post
                      key={id}
                      title={frontmatter.title}
                      description={frontmatter.description}
                      slug={fields.slug}
                      fluid={frontmatter.featuredImage.childImageSharp.fluid}
                    />
                  </>
                ))}
              </div>
            );
          }}
        />
      </section>
    </Layout>
  );
}
