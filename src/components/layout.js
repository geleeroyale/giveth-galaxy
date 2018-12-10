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
            {
              name: 'application-name',
              content: data.site.siteMetadata.title,
            },
            {
              name: 'theme-color',
              content: '#C2449F',
            },
            {
              property: 'og:image:width',
              content: '500',
            },
            {
              property: 'og:image:height',
              content: '500',
            },
            {
              property: 'og:url',
              content: 'https://giveth.io',
            },
            {
              property: 'og:title',
              content: data.site.siteMetadata.title,
            },
            {
              property: 'og:description',
              content: data.site.siteMetadata.description,
            },
            {
              property: 'og:image',
              content: 'https://i.imgur.com/TiTbadA.png',
            },
            {
              property: 'og:image:url',
              content: 'https://i.imgur.com/TiTbadA.png',
            },
          ]}
        />
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title}>
          <html lang="en" />
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Header>
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
