import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ContentTeam from '../components/ContentTeam'

const Gradient1 = styled.div`
  padding: 10vh 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, #2c0b3f 100%);
  height: 100%;
  @media (max-width: 640px) {
    padding: 0 2rem;
  }
`

const TeamPage = ({ data }) => (
  <Layout id="team">
    <Gradient1>
      <ContentTeam headerdata={data.contentTeam.edges} />
    </Gradient1>
  </Layout>
)

export default TeamPage

export const query = graphql`
  query TeamQuery {
    contentTeam: allContentfulContentTeam {
      edges {
        node {
          portrait {
            id
            file {
              url
              fileName
              contentType
            }
          }
          headline1
          headline2
          socialMedium
          socialTwitter
        }
      }
    }
  }
`
