import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Post from '../Post/Post';

export const latestPostsQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      nodes {
        frontmatter {
          title
          description
          date
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
              {postArray.map(({ frontmatter }) => (
                <Post
                  key={frontmatter.date}
                  title={frontmatter.title}
                  description={frontmatter.description}
                />
              ))}
            </>
          );
        }}
      />
    </section>
  );
}
