/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Styled, Text, jsx, Grid, Box } from "theme-ui"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Box sx={{ variant: 'variants.siteContainer' }}>
        <Text>Hello World!</Text>
      </Box>
    </Layout>
  )
}

export default IndexPage
