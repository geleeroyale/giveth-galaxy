import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  padding: 10vh 0;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
`
const ContentItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-gap: 0 3rem;
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0 0.5rem;
  }
`
const ContentImage = styled.img`
  max-width: 400px;
  grid-row: span 4;
  justify-self: end;
  align-self: center;
  @media (max-width: 800px) {
    justify-self: center;
    padding-bottom: 3rem;
    max-width: 280px;
  }
`
const Headline1 = styled.h1`
  align-self: end;

  @media (max-width: 640px) {
    font-size: 1.5rem;
    word-wrap: break-word;
    text-align: center;
  }
`
const Headline2 = styled.h2`
  align-self: start;
  padding-bottom: 2rem;

  @media (max-width: 640px) {
    font-size: 1.5rem;
    word-wrap: break-word;
    text-align: center;
  }
`
const MainText = styled.div`
  max-width: 500px;
  margin: 0;
  padding-bottom: 2rem;

  p {
    margin: 0;
  }
  @media (max-width: 640px) {
    max-width: 1fr;
  }
`

const ContentASocialCoding = ({ data }) => (
  <ContentContainer>
    <ContentItem key={data.node.id}>
      <ContentImage src={data.node.image.file.url} />
      <Headline1>{data.node.headline1}</Headline1>
      <Headline2>{data.node.headline2}</Headline2>
      <MainText
        dangerouslySetInnerHTML={{
          __html: data.node.contentText.childMarkdownRemark.html,
        }}
      />
    </ContentItem>
  </ContentContainer>
)

export default ContentASocialCoding
