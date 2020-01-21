import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ContentJoin from '../components/ContentJoin'

const JoinPage = ({ data }) => (
  <Layout id="join">
    <ContentJoin headerdata={data.contentJoin.edges[0]} />
  </Layout>
)

export default JoinPage

export const query = graphql`
  query JoinQuery {
    contentJoin: allContentfulContentJoin {
      edges {
        node {
          headline1
          headline2
          introText {
            id
            childMarkdownRemark {
              html
            }
          }
          contentText {
            id
            childMarkdownRemark {
              html
            }
          }
          contentText2 {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
