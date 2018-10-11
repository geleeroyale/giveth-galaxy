import React from "react";
import styled from "styled-components";

import HeroBackground from "../images/m82.jpg";

import Button from "../components/button";
import Layout from "../components/layout";
import Cell from "../components/Cell";

import staticdata from "../data/galaxy.json";

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

  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
`;

const HeroGroup = styled.div`
  margin: 0 10vw;
  padding: 150px 50px;
  display: grid;

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
    grid-column: 1;
    grid-row: 1;
  }

  .hero-item-2 {
    margin-top: 1rem;
    grid-column: 1;
    grid-row: 2;
  }

  .hero-item-3 {
    grid-column: 1;
    grid-row: 3;
  }

  .hero-item-4 {
    margin-top: 5vh;
    grid-column: 1;
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
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 1.2rem;
    margin 0;
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

//
// SECTION3 - Functions
//

class IndexPage extends React.Component {
  //
  // SECTION4 - Main Website Composition
  //

  render() {
    return (
      <Layout>
        <Hero>
          <HeroGroup>
            <img
              src={require("../images/logo/givethio-white.svg")}
              alt=""
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

        <SectionCircles>
          <img
            src={require("../images/icons/circles-diagram.svg")}
            alt=""
            className="circlesDiagram"
          />
          <TextBlock>
            <h1>4 circles comprise</h1>
            <h2>our Community, or D.A.C.</h2>
            <p>
              We are forking operational guidelines off the concepts of
              Holacracy, and Meritocracy and develop tools that enable to put
              these concepts into a cryptoeconomic context.
            </p>
            <p>
              Our community is also labeled as the Giveth DAC, which means
              ‘Decentralized Altruistic Community.’
            </p>
          </TextBlock>
        </SectionCircles>

        <SectionGalaxy>
          <TextBlock>
            <h1>A galaxy of projects</h1>
            <h2>built with and for friends</h2>
            <p>
              We support new ideas and push for community approaches to problem
              solving.
            </p>
            <p>
              Many projects are being developed out of Social Coding, to get in
              touch, best join us via Riot: #social-coding:matrix.orgOur
              community is also labeled as the Giveth DAC, which means
              ‘Decentralized Altruistic Community.’
            </p>
            <p>
              We use our network of communication to push certain layer 2
              advancements for the blockchain ecosystem via meetups, conferences
              and unconferences - past and ongoing initiatives are:
            </p>
            <ul>
              <li>ScalingNOW!</li>
              <li>BlockchainExplorersNOW!</li>
              <li>DecentralizationNOW!</li>
            </ul>
          </TextBlock>
          <Block>
            {staticdata.cells.map((cell, index) => (
              <Cell
                key={index}
                title={cell.title}
                link={cell.link}
                description={cell.description}
                image={cell.image}
              />
            ))}
          </Block>
        </SectionGalaxy>

        <NewDiv id={"join"}>
          <p>This is the new div!</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </NewDiv>
      </Layout>
    );
  }
}

export default IndexPage;
