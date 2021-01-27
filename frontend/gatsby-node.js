/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage }, graphql}) => {
  await graphql(`
    {
      allStrapiArticle {
        nodes {
          id
          title
          body
        }
      }
    }
  `).then(res => {
    res.data.allStrapiArticle.nodes.forEach(({id, title, body}) => {
      createPage({
        path: `/p/${id}`,
        component: require.resolve('./src/components/article'),
        context: {
          id,
          title,
          body
        }
      })
    })
  })
}
