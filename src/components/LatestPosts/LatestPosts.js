import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

export const latestPostsQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } },
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default function LatestPosts() {
  return (
    <section className='py-8 px-6'>
      <div className='flex justify-between items-center'>
        <h2 className='font-heading font-semibold text-xl py-4 text-white'>
          Latest Posts
        </h2>
        <Link to='/blog' className='text-white'>
          All posts
        </Link>
      </div>
      <StaticQuery
        query={latestPostsQuery}
        render={data => {
          const postArray = data.allMdx.nodes;
          return (
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2'>
              {postArray.map(({ id, frontmatter, fields }) => (
                <div
                  key={id}
                  className='bg-dark-3 my-5 p-2 rounded-sm border-b-2 border-primary border-opacity-50'
                >
                  <Link to={`/${fields.slug}`}>
                    <h3 className='font-heading text-xl text-gray-400'>
                      {frontmatter.title}
                    </h3>
                  </Link>
                  <Link to={`/${fields.slug}`}>
                    <p className='font-body italic font-light text-lg py-3 text-gray-400'>
                      {frontmatter.description}
                    </p>
                  </Link>
                  <Link to={`/${fields.slug}`} className='text-primary'>
                    Read more
                    {' '}
                    <span>&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          );
        }}
      />
    </section>
  );
}
