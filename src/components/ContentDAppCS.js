import React from 'react'
import styled from 'styled-components'

import colors from '../utils/colors'

const ContentContainer = styled.div`
  margin: 0 auto;
  justify-content: center;
`
const Headline1 = styled.h1`
  grid-column: 2;
  justify-self: start;
  align-self: end;
  padding: 1rem 0 0 3rem;
  @media (max-width: 990px) {
    padding: 0.3rem;
    grid-column: 1;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
const Headline2 = styled.h2`
  grid-column: 2;
  justify-self: start;
  align-self: end;
  padding: 0 0 1rem 3rem;
  @media (max-width: 990px) {
    padding: 0.3rem;
    grid-column: 1;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`

const ContentItem = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, auto);
  justify-self: stretch;
  align-self: center;
  border-radius: 10px;
  background-color: ${colors.white};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: ${colors.black};

  margin-bottom: 4rem;
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 0;
  }
`

const Screenshot = styled.img`
  margin: auto;
  padding: 2rem;
  width: 100%;
  @media (max-width: 990px) {
    padding: 0;
  }
`

const LongDescription = styled.div`
  justify-self: center;
  align-self: start;
  margin: 0;
  padding: 3rem;
  p {
    margin: 0;
    color: ${colors.text};
  }
  @media (max-width: 990px) {
    max-width: 1fr;
    padding: 2rem 0.3rem;
  }
`

const AdditionalInfo = styled.div`
  background-color: #111;
  display: grid;
  color: ${colors.white};
`

const ProjectLink = styled.a`
  @media (max-width: 990px) {
    grid-row: 1;
  }
`

const ContentDAppCS = ({ data }) => (
  <ContentContainer>
    <ContentItem key={data.node.id}>
      <Headline1>{data.node.projectTitle}</Headline1>
      <Headline2>{data.node.projectShortDescription}</Headline2>
      <ProjectLink href={data.node.projectUrl}>
        <Screenshot src={data.node.screenshot.file.url} />
      </ProjectLink>
      <LongDescription
        dangerouslySetInnerHTML={{
          __html: data.node.contentText.childMarkdownRemark.html,
        }}
      />

      <AdditionalInfo />
    </ContentItem>
  </ContentContainer>
)

export default ContentDAppCS
