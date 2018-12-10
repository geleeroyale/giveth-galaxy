import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ContentJoin from '../components/ContentJoin'

const Gradient1 = styled.div`
  padding: 10vh 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #2c0b3f 100%);
  height: 100%;
  @media (max-width: 640px) {
    padding: 0 2rem;
  }
`

const JoinPage = ({ data }) => (
  <Layout id="join">
    <Gradient1>
      <ContentJoin headerdata={data.contentJoin.edges[0]} />
    </Gradient1>
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
