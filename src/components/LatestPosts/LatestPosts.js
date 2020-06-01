import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

export const latestPostsQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      nodes {
        frontmatter {
          title
          description
          date
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
    <section className='bg-gray-100 py-8 px-6'>
      <div className='flex justify-between items-center'>
        <h2 className='font-heading font-semibold text-xl py-4 text-secondary'>
          Latest Posts
        </h2>
        <Link to='/blog' className='text-primary'>
          All posts
        </Link>
      </div>
      <StaticQuery
        query={latestPostsQuery}
        render={data => {
          const postArray = data.allMdx.nodes;
          return (
            <>
              {postArray.map(({ frontmatter, fields }) => (
                <div
                  key={frontmatter.date}
                  className='bg-white my-5 p-2 rounded-sm border-b-2 border-primary border-opacity-50 shadow-md'
                >
                  <Link to={`/${fields.slug}`}>
                    <h3 className='font-heading text-xl'>
                      {frontmatter.title}
                    </h3>
                  </Link>
                  <Link to={`/${fields.slug}`}>
                    <p className='font-body italic font-light text-lg py-3'>
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
            </>
          );
        }}
      />
    </section>
  );
}
