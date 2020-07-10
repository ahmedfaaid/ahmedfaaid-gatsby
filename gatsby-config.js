/* eslint-disable quotes */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Ahmed Faaid | Freelance Developer`,
    titleTemplate: `%s | Ahmed Faaid`,
    description:
      `Freelance web developer based in Hamilton, Canada, specializing in React, Node and JavaScript technologies`,
    siteUrl: `https://ahmedfaaid.com`,
    image: `/images/ahmed-w-2000.jpg`,
    twitterUsername: `@mr_amed`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/project-data`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sitemap`,
  ],
};
