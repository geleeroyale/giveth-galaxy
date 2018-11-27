import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 640px) {
    padding: 2rem 0;
  }
`
const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, minmax(320px 1fr));
  grid-gap: 0rem 1rem;
  padding-bottom: 5rem;

  @media (max-width: 990px) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    justify-items: center;
    padding-bottom: 1rem;
  }
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
const MainText1 = styled.div`
  max-width: 500px;
  justify-self: end;
  margin: 0;
  p {
    margin: 0;
  }
  @media (max-width: 990px) {
    width: 1fr;
    justify-self: center;
  }
`
const MainText2 = styled.div`
  max-width: 500px;
  justify-self: start;
  margin: 0;
  p {
    margin: 0;
  }
  @media (max-width: 980px) {
    grid-row: 4;
    width: 1fr;
    justify-self: center;
  }
`

const ItemContainer = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(6, auto);
  justify-items: center;
`

const ContentItem = styled.div`
  padding: 0.5rem;
  display: grid;
  justify-self: stretch;
  align-self: center;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(20, 20, 20, 0.5) 100%
  );
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2) translateY(-3px);
    background-color: #2c0b3f;

    @media (max-width: 640px) {
      background-color: black;
      transform: scale(1) translateY(0px);
    }
  }

  @media (max-width: 640px) {
    border: 1px solid #e01c6b;
  }
`

const UpperCard = styled.div`
  background-color: black;
  display: grid;
  color: white;
`

const ContentImage = styled.img`
  padding: 0.5rem;
  height: 60px;
  width: auto;
  grid-row: 1;
  justify-self: center;
  align-self: center;
`

const ProjectTitle = styled.a`
  justify-self: center;
  font-size: 1.5rem;
  font-weight: 100;
  grid-row: 2;
  margin: 1rem;
  padding: 0 1rem;

  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2) translateY(-3px);
  }
`

const ProjectDescription = styled.p`
  padding-top: 1rem;
  justify-self: center;
  grid-row: 3;
`

const ContentTextblock = ({ headerdata, data }) => (
  <ContentContainer>
    <ContentHeader>
      <Headline1>{headerdata.node.headline1}</Headline1>
      <Headline2>{headerdata.node.headline2}</Headline2>
      <MainText1
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText.childMarkdownRemark.html,
        }}
      />
      <MainText2
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText2.childMarkdownRemark.html,
        }}
      />
    </ContentHeader>
  </ContentContainer>
)

export default ContentTextblock
