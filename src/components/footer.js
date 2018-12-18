import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Social from '../components/social'

const OuterContainer = styled.div`
  background-color: black;
`

const FooterContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 2rem;
  @media (max-width: 640px) {
    padding: 0 2rem;
  }
`
/**
const LinkContainer = styled.div`
  display: grid;
  padding-top: 1rem;
  padding-bottom: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  justify-content: center;
  @media (max-width: 640px) {
    grid-template-rows: auto auto;
  }
`
 */

const Description = styled.p`
  padding-top: 4rem;
  color: #333;
  text-align: center;
  font-size: 0.9rem;
`

const Copyleft = styled.div`
  padding-top: 2rem;
  text-align: center;
  font-size: 1rem;
  color: #333;
`

/**
 * 
 * <Description>Giveth Links</Description>
        <LinkContainer>
          {data.allContentfulLink.edges.map(edges => (
            <SiteLink key={edges.node.id} href={edges.node.url}>
              {edges.node.title}
            </SiteLink>
          ))}
        </LinkContainer>
 
        */

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterLinkQuery {
        allContentfulLink {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <FooterContainer>
          <Description>Find us on social media</Description>
          <Social />

          <Copyleft>
            Support us with your Donation - <a href="/donate">revolution.eth</a>
          </Copyleft>
          <Copyleft>
            MMXVIII - No Rights Reserved -{' '}
            <a href="https://wiki.giveth.io/dac/governance/">The Giveth DAC</a>
          </Copyleft>
        </FooterContainer>
      </OuterContainer>
    )}
  />
)

export default Footer
