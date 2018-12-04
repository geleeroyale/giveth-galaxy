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
  opacity: 0.6;
`

const ContentItem = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  justify-self: stretch;
  align-self: center;
  background: #222;
  border-radius: 10px;
  background-image: linear-gradient(white, #4c4153);
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  color: black;
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 0;
  }
`

const Screenshot = styled.img`
  margin: auto;
  @media (max-width: 990px) {
  }
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

const ContentDApp = ({ data }) => (
  <ContentContainer>
    <ItemContainer>
      <ContentItem key={data.node.id}>
        <LongDescription
          dangerouslySetInnerHTML={{
            __html: data.node.contentText.childMarkdownRemark.html,
          }}
        />
        <AdditionalInfo>
          <Screenshot src={data.node.screenshot.file.url} />
        </AdditionalInfo>
        <AdditionalInfo />
      </ContentItem>
    </ItemContainer>
  </ContentContainer>
)

export default ContentDApp
