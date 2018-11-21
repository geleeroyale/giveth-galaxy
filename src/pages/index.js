import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import ContentA from '../components/ContentA'
import ContentB from '../components/ContentB'
import ContentC from '../components/ContentC'
import ContentD from '../components/ContentD'
import Friendlogos from '../components/Friends'

import Button from '../components/button'
import Layout from '../components/layout'

//
// SECTION1 - Styling
//
// Styling is done directly via styled components except a few global styles provided by layout.css
// Order of styled elements follows the order of class IndexPage
//

const Hero = styled.div`
  padding-top: 10vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    #000000 100%,
    #000000 100%
  );
  background-size: cover;
  background-position: center;
  height: 100vh;
  align-content: start;
  justify-content: center;
  display: grid;
  z-index: -1;

  @media (max-width: 960) {
    padding: 0;
  }
`

const HeroGroup = styled.div`
  margin: 0 15vw;
  padding: 200px 50px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: repeat() (4, auto);

  h1 {
    margin: 0;
    color: white;
    font-size: 2rem;
    line-height: 1.2;
  }

  p {
    margin: 0px;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.8);
  }

  .hero-item-1 {
    grid-column: 2;
    grid-row: 1;
    max-width: 500px;
    justify-self: center;
  }

  .hero-item-2 {
    margin-top: 1rem;
    grid-column: 2;
    grid-row: 2;
  }

  .hero-item-3 {
    grid-column: 2;
    grid-row: 3;
  }

  .hero-item-4 {
    margin-top: 5vh;
    grid-column: 2;
    grid-row: 4;
    justify-self: center;
  }

  @media (max-width: 640px) {
    margin: 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`

const HeroNav = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 0 4rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 3rem;

  h2 {
    text-align: center;
    font-size: 1.2rem;
    margin: 0;
    font-weight: 800;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    margin: 0.2rem;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const Block = styled.div`
  display: block;
  text-align: center;

  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    transform: skew(0deg, -10deg);
  }
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
`

const Headline1 = styled.h1`
  grid-column: span 2;
  justify-self: start;
  align-self: end;
  @media (max-width: 990px) {
    justify-self: center;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
const Headline2 = styled.h2`
  grid-column: span 2;
  justify-self: start;
  align-self: start;
  padding-bottom: 2rem;
  @media (max-width: 990px) {
    justify-self: center;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`

const Gradient1 = styled.div`
  padding: 10vh 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #2c0b3f 100%);
  height: 100%;
`

const Gradient2 = styled.div`
  padding: 10vh 0;
  background: linear-gradient(180deg, #2c0b3f 0%, #c2449f 100%);
  z-index: -1;
`
const Black = styled.div`
  padding: 10vh 0;
  background: black;
  height: 120%;
  z-index: 0;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Img
      fluid={data.backgroundImage.childImageSharp.fluid}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100vh',
        zIndex: '-2',
      }}
    />
    <Hero>
      <HeroGroup>
        <img
          src={require('../images/logo/givethio-white.svg')}
          alt="giveth.io"
          className="hero-item-1"
        />
        <p className="hero-item-2">A Community of Makers</p>
        <h1 className="hero-item-3">Building the Future of Giving</h1>
        <Button primary className="hero-item-4">
          <a href="/join">Join our chat</a>
        </Button>
      </HeroGroup>
    </Hero>
    <HeroNav>
      <Block>
        <Link to="#org">
          <img
            width="80px"
            height="80px"
            src={require('../images/icons/distributed-org.svg')}
            alt=""
          />
          <p>Distributed organization</p>
          <h2>adopted from Holacracy</h2>
        </Link>
      </Block>
      <Block>
        <Link to="#galaxy">
          <img
            width="80px"
            height="80px"
            src={require('../images/icons/cooperative-dev.svg')}
            alt=""
          />

          <p>Cooperative development</p>
          <h2>with a need-filling attitude</h2>
        </Link>
      </Block>
      <Block>
        <Link to="#dapp">
          <img
            width="80px"
            height="80px"
            src={require('../images/icons/blockchain.svg')}
            alt=""
          />
          <p>Decentralized applications</p>
          <h2>powered by Blockchain</h2>
        </Link>
      </Block>
    </HeroNav>
    <Container id="galaxy">
      <ContentB
        headerdata={data.contentB.edges[0]}
        data={data.contentBcards.edges}
      />
    </Container>
    <Gradient1 id="dapp">
      <Container>
        <Headline1>Blockchain powered,</Headline1>
        <Headline2>decentralized applications</Headline2>
        <ContentC data={data.contentDapps.edges} />
      </Container>
    </Gradient1>
    <Gradient2>
      <Container id="org">
        <Headline1>Our Community</Headline1>
        <Headline2>of digitally sovereign Unicorns</Headline2>
      </Container>
      <ContentA data={data.contentA.edges[0]} />
      <ContentA data={data.contentA.edges[1]} />
    </Gradient2>
    <Black>
      <ContentD headerdata={data.contentTools.edges[0]} />
      <Friendlogos data={data.friends.edges} />
    </Black>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query NewQuery {
    contentA: allContentfulContentA {
      edges {
        node {
          id
          image {
            file {
              url
            }
            fluid {
              sizes
            }
          }
          headline1
          headline2
          contentText {
            id
            contentText
            childMarkdownRemark {
              html
            }
          }
          readMoreLink
        }
      }
    }
    contentB: allContentfulContentB {
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
    contentBcards: allContentfulContentBCards(
      sort: { fields: [updatedAt], order: DESC }
    ) {
      edges {
        node {
          id
          logo {
            id
            file {
              url
            }
          }
          projectTitle
          projectUrl
          projectShortDescription
        }
      }
    }
    contentDapps: allContentfulContentDapps(
      sort: { fields: [createdAt], order: ASC }
    ) {
      edges {
        node {
          id
          projectTitle
          projectUrl
          projectShortDescription
          contentText {
            childMarkdownRemark {
              html
            }
          }
          logo {
            file {
              url
            }
          }
          screenshot {
            file {
              url
            }
          }
        }
      }
    }
    contentTools: allContentfulContentTools {
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
    backgroundImage: file(relativePath: { eq: "m82.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 75) {
          ...GatsbyImageSharpFluid
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
    friends: allContentfulFriendslogos {
      edges {
        node {
          id
          link
          logo {
            file {
              url
            }
          }
        }
      }
    }
  }
`
