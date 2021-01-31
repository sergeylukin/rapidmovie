import React, { useState, useEffect } from 'react'
import Layout from './layout'
import NotFound from '../pages/404'
import { Text, Flex, Styled, jsx, Grid, Box } from "theme-ui"
import axios from 'axios'
import SEO from "./seo"

export default ({ imdbID, pageContext: {title, imdbRating, plot, gatsbyBackendURL} }) => {

  const [movie, setMovie] = useState({})

  useEffect(() => {
    const loadMovie = async () => {
      if (title && plot) {
        console.log('GOT titlt and plot WTF')
        setMovie({
          title,
          imdbRating,
          plot
        })
      } else {
        const url = `${gatsbyBackendURL}/movies/${imdbID}`
        try {
          const entity = await axios.get(url)
          setMovie(entity.data)
        } catch (err) {
          setMovie(null)
        }
      }
    }
    loadMovie()
  }, [])

  return movie === null ? <NotFound /> : (
    <Layout>
      <SEO title={movie.title ? movie.title : 'Loading'} />
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        >
        <Box>
          <Text variant="movie.title"
            sx={{
              pt: 3,
              fontSize: 4,
              fontWeight: 'bold',
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
