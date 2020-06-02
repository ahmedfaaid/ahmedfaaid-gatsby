const path = require('path');
const { slugify } = require('./src/util/utilFunctions');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const slugFromTitle = `blog/${slugify(node.frontmatter.title)}`;
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/singlePost.js'),
      context: { slug: node.fields.slug },
    });
  });
};
