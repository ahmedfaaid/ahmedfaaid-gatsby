import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post/Post';

export const allPostsQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      nodes {
        frontmatter {
          title
          description
          date
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
      <h1 className='font-heading text-4xl text-secondary text-center my-4'>Blog</h1>
      <section>
        <StaticQuery
          query={allPostsQuery}
          render={data => {
            const postArray = data.allMdx.nodes;
            return (
              <div>
                {postArray.map(({ frontmatter, fields }) => (
                  <>
                    <Post
                      key={frontmatter.date}
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
