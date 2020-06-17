import React from 'react';
// import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout';
import Project from '../components/Project/Project';

export const allProjectsQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          deployed
          description
          github
          id
          name
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default function Projects() {
  return (
    <Layout>
      <h1 className='font-heading text-4xl text-primary text-center my-4'>
        Projects
      </h1>
      <section>
        <div>
          <StaticQuery
            query={allProjectsQuery}
            render={data => {
              const projects = data.allProjectsJson.edges;
              return (
                <>
                  {projects.map(({ node: project }) => (
                    <Project name={project.name} />
                  ))}
                </>
              );
            }}
          />
        </div>
      </section>
    </Layout>
  );
}
