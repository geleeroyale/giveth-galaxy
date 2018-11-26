import React from 'react'
import styled from 'styled-components'
import { FaHeart } from 'react-icons/fa'

const OuterContainer = styled.div`
  margin: 0 auto;
  color: #333;
  width: 100%;
  transform: skew(0deg, -5deg);
  @media (max-width: 640px) {
    transform: skew(0deg, 0deg);
  }
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  color: #333;
`

const Gradient3 = styled.div`
  padding: 10vh 0;
  background: linear-gradient(180deg, #111 0%, black 100%);
`

const Description = styled.h2`
  font-size: 1rem;
  text-align: center;
  color: #c1439e;
  transform: skew(0deg, 5deg);
  @media (max-width: 640px) {
    font-size: 0.8rem;
    transform: skew(0deg, 0deg);
  }
`

const Icon = styled.p`
  font-size: 4rem;
  line-height: 0;
  margin: 1rem;
  color: #333;

  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2) translateY(-3px);
    color: #e01c6b;
  }
`

const InnerContainer = styled.div`
  display: grid;
  padding-top: 3rem;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: auto auto;
  justify-content: space-between;
  align-items: center;
  grid-gap: 1rem;
  @media (max-width: 990px) {
    grid-template-columns: repeat(2, minmax(50px, 100px));
    justify-content: center;
    grid-gap: 1rem;
  }
`

const ProjectLink = styled.a`
  justify-self: center;
  font-size: 2rem;
`

const ContentItem = styled.div`
  justify-self: stretch;
  padding: 0.5rem;
`

const Logo = styled.img`
  max-width: 150px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  filter: saturate(0.1);

  :hover {
    transform: scale(1.2) translateY(-3px) skew(0deg, 5deg);
    filter: saturate(1);
  }

  @media (max-width: 640px) {
    transform: skew(0deg, 0deg);
    max-width: 100px;
  }
`

const Friendlogos = ({ data }) => (
  <OuterContainer>
    <Gradient3>
      <Description>Unicorn Love</Description>
      <Description>
        <Icon>
          <FaHeart />
        </Icon>
      </Description>
      <Description>
        {' '}
        Our smart contracts are being used widely in the Ethereum community,
      </Description>
      <Description> Check out what our friends are doing</Description>
      <Container>
        <InnerContainer>
          {data.map(edges => (
            <ContentItem key={edges.node.id}>
              <ProjectLink href={edges.node.link}>
                <Logo src={edges.node.logo.file.url} />
              </ProjectLink>
            </ContentItem>
          ))}
        </InnerContainer>
      </Container>
    </Gradient3>
  </OuterContainer>
)

export default Friendlogos
