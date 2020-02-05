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
  grid-gap: 0rem 3rem;
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
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
const Headline2 = styled.h2`
  grid-column: span 2;
  justify-self: start;
  align-self: start;
  padding-bottom: 2rem;

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
