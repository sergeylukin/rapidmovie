import React, { useState, useEffect } from 'react'
import Layout from './layout'
import { Text, Flex, Styled, jsx, Grid, Box } from "theme-ui"
import axios from 'axios'

export default ({ imdbID, pageContext: {title, imdbRating, plot, gatsbyBackendURL} }) => {

  const [movie, setMovie] = useState({})

  console.log(imdbID)
  useEffect(() => {
    const loadMovie = async () => {
      if (title && plot) {
        setMovie({
          title,
          imdbRating,
          plot
        })
      } else {
        const url = `${gatsbyBackendURL}/movies/${imdbID}`
        const entity = await axios.get(url)
        setMovie(entity.data)
      }
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
