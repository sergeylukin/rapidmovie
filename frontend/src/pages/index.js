/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { Flex, Styled, jsx, Grid, Box } from "theme-ui"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Box sx={{ variant: 'variants.siteContainer' }}>
      </Box>
    </Layout>
  )
}

export default IndexPage
