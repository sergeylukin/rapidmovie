/** @jsx jsx */
import React from "react"
import { Text, jsx, Box } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TitlePage = () => {
  return (
    <Layout>
      <SEO title="Loading" />
      <Box sx={{ variant: 'variants.siteContainer' }}>
        <Text>Crunching movie data...</Text>
      </Box>
    </Layout>
  )
}

export default TitlePage
