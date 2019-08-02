import React from 'react'
import styled from 'styled-components'

import colors from '../utils/colors'

const ContentContainer = styled.div`
  margin: 0 auto;
  justify-content: center;
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
`

const LongDescription = styled.div`
  justify-self: center;
  align-self: center;
  margin: 0;
  padding: 3rem;
  p {
    margin: 0;
    color: ${colors.text};
  }
  @media (max-width: 990px) {
    max-width: 1fr;
    padding: 0.3rem;
    padding-bottom: 2rem;
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

const ContentDApp = ({ data }) => (
  <ContentContainer>
    <ContentItem key={data.node.id}>
      <LongDescription
        dangerouslySetInnerHTML={{
          __html: data.node.contentText.childMarkdownRemark.html,
        }}
      />
      <ProjectLink href={data.node.projectUrl}>
        <Screenshot src={data.node.screenshot.file.url} />
      </ProjectLink>

      <AdditionalInfo />
    </ContentItem>
  </ContentContainer>
)

export default ContentDApp
