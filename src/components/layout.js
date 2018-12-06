import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  html {
    color: red;
  }
  body {
  margin: 0;
  color: #DFDAE8;
  background: #c2449f;
}
  a {
    color: #E01C6B;
    text-decoration: none;
    font-weight: 600;
}
h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
}

h2 {
  margin: 0;
  font-size: 2rem; 
  font-weight: 300;
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords,
            },
          ]}
        >
          <html lang="en" />
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Helmet>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            // maxWidth: 960,
            // padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
