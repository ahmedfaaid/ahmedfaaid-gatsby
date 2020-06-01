// const { createFilePath } = require('gatsby-source-filesystem');
const { slugify } = require('./src/util/utilFunctions');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    // const slug = createFilePath({ node, getNode, basePath: 'blog' });
    const slugFromTitle = `blog/${slugify(node.frontmatter.title)}`;
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    });
  }
};
