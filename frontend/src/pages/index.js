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
        <Grid
          gap={[2, 1, null, null]}
          columns={[ 2, 3, 4, 5 ]}>
          {data.allStrapiArticle.nodes.map(({ id, title, body }) => {
            return (
              <Box key={id} p={[1, 2, 3, null]}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
                >
                <Link to={`/p/${id}`} sx={{ alignSelf: 'center', display: 'block' ,width: '100%' }}>{title}</Link>
                  <p
                    sx={{
                      textAlign: 'center',
                      height: '1rem',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                    >{body}</p>
              </Box>
            )
          })}
        </Grid>
      </Box>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiArticle {
      nodes {
        id
        title
        body
      }
    }
  }
`
