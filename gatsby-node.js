/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
/*exports.createPages = async ({ actions, graphql }) => {
  console.log('m11')

  const {data1} = await graphql(`
 query Posts {
  allMarkdownRemark {
    nodes {
      frontmatter {
        category
        url
      }
    }
  }
}
`)
  data1.allMarkdownRemark.nodes.forEach(node => {
    const {url} = node.frontmatter;
  actions.createPage({
    path: `/${url}`,
    component: require.resolve("./src/templates/single-posts.js"),
    context: {url}
  })
})
}
*/
