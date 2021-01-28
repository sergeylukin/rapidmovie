import React from 'react'
import Layout from './layout'
import { Text, Flex, Styled, jsx, Grid, Box } from "theme-ui"

export default ({ pageContext: {id, title, imdbRating, plot} }) => {
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
            }}>{title}</Text>
        </Box>
        <Box>
          <Text>{plot}</Text>
          <Text>{imdbRating}</Text>
        </Box>
      </Flex>
    </Layout>
  )
}
