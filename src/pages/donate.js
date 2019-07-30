import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ContentDonate from '../components/ContentDonate'

const Gradient1 = styled.div`
  padding: 10vh 0;
  background: linear-gradient(180deg, #000000ee 0%, #2c0b3fee 100%);
`

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  justify-content: center;
`

const DonationPage = ({ data }) => (
  <Layout>
    <Gradient1>
      <Container>
        <ContentDonate
          headerdata={data.contentDonate.edges[0]}
          data={data.contentDonateFaq.edges}
          backgroundimage={data.imageEarth}
        />
      </Container>
    </Gradient1>
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
    imageEarth: file(relativePath: { eq: "earth.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
