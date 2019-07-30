import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
`

const ItemContainer = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  justify-items: center;
`

const ContentItem = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  justify-self: stretch;
  align-self: center;
  border-radius: 10px;
  background-color: white;
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  color: black;
  margin-bottom: 4rem;
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 0;
  }
`

const Screenshot = styled.img`
  margin: auto;
`

const LongDescription = styled.div`
  justify-self: center;
  margin: 0;
  padding: 3rem;
  p {
    margin: 0;
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
  color: white;
`

const ProjectLink = styled.a`
  @media (max-width: 990px) {
    grid-row: 1;
  }
`

const ContentDApp = ({ data }) => (
  <ContentContainer>
    <ItemContainer>
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
    </ItemContainer>
  </ContentContainer>
)

export default ContentDApp
