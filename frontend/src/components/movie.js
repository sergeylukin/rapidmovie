import React, { useState, useEffect } from 'react'
import Layout from './layout'
import NotFound from '../pages/404'
import Loading from '../pages/title'
import { Text, Flex, Styled, jsx, Grid, Box } from "theme-ui"
import Img from "gatsby-image"
import axios from 'axios'
import SEO from "./seo"

export default ({ slug, pageContext }) => {
  const {
    gatsbyBackendURL,
    ssr
  } = pageContext
  const imdbID = ssr ? pageContext.imdbID : slug
  const {
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
    production,
    website,
  } = pageContext

  const movieFromSSR = {
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
    production,
    website
  }

  const [movie, setMovie] = useState(movieFromSSR)
  const [isMovieLoaded, setIsMovieLoaded] = useState(ssr ? true : false)

  useEffect(() => {
    const loadMovie = async () => {
      if (!movie.title) {
        const url = `${gatsbyBackendURL}/movies/${imdbID}`
        try {
          const entity = await axios.get(url)
          setMovie(entity.data)
          setIsMovieLoaded(true)
        } catch (err) {
          setMovie(null)
        }
      }
    }
    loadMovie()
  }, [])

  if (movie === null) return <NotFound />

  if (isMovieLoaded) {
    Object.keys(movie).map(key => {
      if (!movie[key]) movie[key] = 'N/A'
    })
  }

  return !isMovieLoaded ? <Loading /> : (
    <Layout>
      <SEO title={movie.title} />
      <Flex
        sx={{
          flexDirection: "column",
        }}
        >
        <Text as="h1" variant="variants.movie.title">{movie.title}</Text>
        <Flex
          sx={{
            flexDirection: ['column', null, 'row', null]
          }}>
          <Box sx={{
            flexGrow: 1,
            textAlign: ['center', null, 'left', null],
            width: '100%',
          }} variant="variants.movie.cover">
            <img src={movie.poster} width="100%" />
          </Box>
          <Box variant="variants.movie.details">
            <dl>
              <Text as="dt" variant="variants.movie.label">Year</Text>
              <Styled.p as="dd">{movie.year}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Rated</Text>
              <Styled.p as="dd">{movie.rated}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Released</Text>
              <Styled.p as="dd">{movie.released}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Runtime</Text>
              <Styled.p as="dd">{movie.runtime}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Genre</Text>
              <Styled.p as="dd">{movie.genre}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Director</Text>
              <Styled.p as="dd">{movie.director}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Writer</Text>
              <Styled.p as="dd">{movie.writer}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Actors</Text>
              <Styled.p as="dd">{movie.actors}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Plot</Text>
              <Styled.p as="dd">{movie.plot}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Language</Text>
              <Styled.p as="dd">{movie.language}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Country</Text>
              <Styled.p as="dd">{movie.country}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Awards</Text>
              <Styled.p as="dd">{movie.awards}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Metascore</Text>
              <Styled.p as="dd">{movie.metascore}</Styled.p>
              <Text as="dt" variant="variants.movie.label">ImdbRating</Text>
              <Styled.p as="dd">{movie.imdbRating}</Styled.p>
              <Text as="dt" variant="variants.movie.label">ImdbVotes</Text>
              <Styled.p as="dd">{movie.imdbVotes}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Production</Text>
              <Styled.p as="dd">{movie.production}</Styled.p>
              <Text as="dt" variant="variants.movie.label">Website</Text>
              <Styled.p as="dd">{movie.website}</Styled.p>
            </dl>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}
