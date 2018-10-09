import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import HeroBackground from '../images/m82.jpg'

import Button from '../components/button'
import Layout from '../components/layout'

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
  height: 920px;

  h1 {
    margin: 0;
    color: white;
    font-size: 2rem;
    line-height: 1.2;
  }

  p {
    font-size: 2rem;
    line-height: 1.2;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`
const HeroGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  max-width: 500px;
  margin: 0 auto;
  padding: 150px 50px;
  text-align: center;

  .givethiologo {
    width=200px;
    height: auto;
  }
  @media (max-width: 640px) {
    padding: 100px 20px;

  }
`
const NewDiv = styled.div``

const IndexPage = () => (
  <Layout>
    <Hero>
      <HeroGroup>
        <img
          src={require('../images/logo/givethio-white.svg')}
          alt=""
          className="givethiologo"
        />
        <h1>A community of developers</h1>
        <p>Building the future of giving</p>
        <Button primary>
          <a href="#join">Join now</a>
        </Button>

        <Link to="/page-2/">Go to page 2</Link>
      </HeroGroup>
    </Hero>
    <NewDiv id={'join'}>
      <p>This is the new div!</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </NewDiv>
  </Layout>
)

export default IndexPage
