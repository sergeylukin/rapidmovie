/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage }, graphql}) => {
  await graphql(`
    {
      allStrapiMovie {
        nodes {
          id
          title
          plot
          imdbRating
          imdbID
          slug
        }
      }
    }
  `).then(res => {
    res.data.allStrapiMovie.nodes.forEach(({id, title, plot, imdbRating, imdbID}) => {
      createPage({
        path: `/movies/${imdbID}`,
        component: require.resolve('./src/components/movie'),
        context: {
          id,
          title,
          plot,
          imdbRating,
          imdbID
        }
      })
    })
  })
}
