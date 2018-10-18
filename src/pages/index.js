import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import HeroBackground from "../images/m82.jpg";

import ContentA from "../components/ContentA";
import ContentB from "../components/ContentB";
import Button from "../components/button";
import Layout from "../components/layout";

//
// SECTION1 - Styling
//
// Styling is done directly via styled components except a few global styles provided by layout.css
// Order of styled elements follows the order of class IndexPage
//

const Hero = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 100%,
      #000000 100%
    ),
    url(${HeroBackground});
  padding-top: 10vh;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  align-content: center;
  justify-content: center;
  display: grid;
`;

const HeroGroup = styled.div`
  margin: 0 15vw;
  padding: 200px 50px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: repeat()(4, auto);

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
    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.2rem;
    }
    padding: 150px 20px;
  }
`;

const HeroNav = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 0 4rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 3rem 0;
    justify-content: stretch;
    align-items: stretch;
  }
`;

const Block = styled.div`
  display: block;
  text-align: center;
`;

const SectionCircles = styled.div`
  margin: 5vh auto;
  min-height: 60vh;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10vw;
  justify-content: space-between;
  align-items: center;

  .circlesDiagram {
    width: 20vw;
    @media (max-width: 640px) {
      width: 90%;
      margin-top: 10vh;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 0.5rem;
    width: 100%;
    justify-items: center;
  }
`;

const TextBlock = styled.div`
  display: block;
  max-width: 90%;

  @media (max-width: 640px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;

const SectionGalaxy = styled.div`
  margin: 5vh auto;
  min-height: 100vh;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10vw;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 0.5rem;
    width: 100%;
    justify-items: center;
  }
`;

const NewDiv = styled.div`
  margin: auto;
  max-width: 60vw;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Hero>
      <HeroGroup>
        <img
          src={require("../images/logo/givethio-white.svg")}
          alt="giveth.io"
          className="hero-item-1"
        />
        <p className="hero-item-2">a community of developers</p>
        <h1 className="hero-item-3">building the future of giving</h1>
        <Button primary className="hero-item-4">
          <a href="#join">Join our chat</a>
        </Button>
      </HeroGroup>

      <HeroNav>
        <Block>
          <img
            width="80px"
            height="80px"
            src={require("../images/icons/distributed-org.svg")}
            alt=""
          />
          <p>Distributed organization</p>
          <h2>adopted from Holacracy</h2>
        </Block>
        <Block>
          <img
            width="80px"
            height="80px"
            src={require("../images/icons/cooperative-dev.svg")}
            alt=""
          />
          <p>Cooperative development</p>
          <h2>with a need-filling attitude</h2>
        </Block>
        <Block>
          <img
            width="80px"
            height="80px"
            src={require("../images/icons/blockchain.svg")}
            alt=""
          />
          <p>Decentralized applications</p>
          <h2>powered by Blockchain</h2>
        </Block>
      </HeroNav>
    </Hero>

    <ContentB
      headerdata={data.allContentfulContentB.edges[0]}
      data={data.allContentfulContentBCards.edges}
    />
    <ContentA data={data.allContentfulContentA.edges[0]} />
    <ContentA data={data.allContentfulContentA.edges[1]} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulContentA {
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
    allContentfulContentB {
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
    allContentfulContentBCards(sort: { fields: [createdAt], order: ASC }) {
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
    file(relativePath: { eq: "m82.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`;
