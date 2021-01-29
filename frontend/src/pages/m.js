import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { Text, Flex, Styled, jsx, Grid, Box } from "theme-ui"
import axios from 'axios'

export default ({ data }) => {

  const [movie, setMovie] = useState({})
  const gatsbyBackendURL = data.site.siteMetadata.gatsbyBackendURL
  let imdbID = 'tt0106519'


  if (typeof window !== `undefined`) {
    const url = new URL(window.location.href);
    const path = url.pathname
    if (/(ch|co|ev|nm|tt)\d{6,}/.test(path)) {
      imdbID = path.replace('/', '')
    }
    // if (/m\/\w+/.test(path)) {
    //   imdbID = path.replace('/m/', '')
    // }
  }

  console.log('pain template')

  console.log(imdbID)
  useEffect(() => {
    const loadMovie = async () => {
      const url = `${gatsbyBackendURL}/movies/${imdbID}`
      const entity = await axios.get(url)
      setMovie(entity.data)
    }
    loadMovie()
  }, [])

  return (
    <Layout>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        >
        <Box>
          <Text
            sx={{
              pt: 3,
              fontSize: 4,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>{movie.title}</Text>
        </Box>
        <Box>
          <Text>{movie.plot}</Text>
          <Text>{movie.imdbRating}</Text>
        </Box>
      </Flex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
      site {
        siteMetadata {
          gatsbyBackendURL
        }
      }
  }
`
