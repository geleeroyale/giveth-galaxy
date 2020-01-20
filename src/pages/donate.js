import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ContentDonate from '../components/ContentDonate'

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  justify-content: center;
`

const DonationPage = ({ data }) => (
  <Layout>
    <Container>
      <ContentDonate
        headerdata={data.contentDonate.edges[0]}
        data={data.contentDonateFaq.edges}
      />
    </Container>
  </Layout>
)

export default DonationPage

export const query = graphql`
  query DonateQuery {
    contentDonate: allContentfulContentDonate {
      edges {
        node {
          headline1
          headline2
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
    contentDonateFaq: allContentfulContentDonateFaq {
      edges {
        node {
          id
          headline
          contentText {
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
