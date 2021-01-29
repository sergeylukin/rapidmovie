/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ page, actions: { createPage }, graphql}) => {
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
      },
      site {
        siteMetadata {
          gatsbyBackendURL
        }
      }
    }
  `).then(res => {
    const gatsbyBackendURL = res.data.site.siteMetadata.gatsbyBackendURL
    console.log(gatsbyBackendURL)
    createPage({
      path: `/:imdbID`,
      matchPath: `/:imdbID`,
      component: require.resolve(`./src/components/movie`),
      context: {
        gatsbyBackendURL
      }
    })
    res.data.allStrapiMovie.nodes.forEach(({title, plot, imdbRating, imdbID}) => {
      createPage({
        path: `/${imdbID}`,
        component: require.resolve('./src/components/movie'),
        context: {
          title,
          plot,
          imdbRating,
          gatsbyBackendURL,
        }
      })
    })
  })
}
