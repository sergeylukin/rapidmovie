/** @jsx jsx */
import { Box, Styled, jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Styled.root>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box variant="variants.siteContainer">
        <main>{children}</main>
        <footer>
          <Styled.p sx={{ p: 4, textAlign: 'center' }}>
            Built with 
            <Styled.p as="span" sx={{ color: '#ff6032' }}>{` ♥ `}</Styled.p>
            in Tel Aviv
          </Styled.p>
        </footer>
      </Box>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
