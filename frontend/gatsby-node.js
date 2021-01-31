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
          year
          rated
          released
          runtime
          genre
          director
          writer
          actors
          plot
          language
          country
          awards
          poster
          metascore
          imdbRating
          imdbVotes
          imdbID
          production
          website
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
      path: `/title/:slug/`,
      matchPath: `/title/:slug/`,
      component: require.resolve(`./src/components/movie`),
      context: {
        gatsbyBackendURL,
        ssr: false
      }
    })
    res.data.allStrapiMovie.nodes.forEach(({
      id,
      title,
      year,
      rated,
      released,
      runtime,
      genre,
      director,
      writer,
      actors,
      plot,
      language,
      country,
      awards,
      poster,
      metascore,
      imdbRating,
      imdbVotes,
      imdbID,
      production,
      website,
      slug,
      gatsbyBackendURL,
    }) => {
      createPage({
        path: `/title/${imdbID}/`,
        component: require.resolve('./src/components/movie'),
        context: {
          id,
          title,
          year,
          rated,
          released,
          runtime,
          genre,
          director,
          writer,
          actors,
          plot,
          language,
          country,
          awards,
          poster,
          metascore,
          imdbRating,
          imdbVotes,
          imdbID,
          production,
          website,
          slug,
          gatsbyBackendURL,
          ssr: true
        }
      })
    })
  })
}
