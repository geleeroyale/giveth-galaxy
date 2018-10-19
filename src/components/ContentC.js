import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  justify-items: center;
  opacity: 0.6;
`;

const ContentItem = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  justify-self: stretch;
  align-self: center;
  background: #222;
  border-radius: 10px;
  background-image: linear-gradient(black, white);
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  color: black;
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 0;
  }
`;

const ContentImage = styled.img`
  padding: 2rem;
  height: 200px;
  width: auto;
  grid-row: 1 / span 3;
  grid-column: 1;
  justify-self: center;
  align-self: center;
  @media (max-width: 990px) {
    margin: 0 auto;
    grid-row: 1;
  }
`;

const ProjectTitle = styled.a`
  justify-self: center;
  align-self: center;
  font-size: 4rem;
  font-weight: 200;
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 0 1rem;
  color: #000;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2) translateY(-3px);
    color: #e01c6b;
  }

  @media (max-width: 990px) {
    grid-row: 2;
    grid-column: 1;
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  justify-self: center;
  grid-row: 3;
  @media (max-width: 990px) {
    grid-row: 3;
    grid-column: 1;
  }
`;

const Screenshot = styled.img`
  max-width: 300px;
  margin: auto;
  @media (max-width: 990px) {
    display: none;
  }
`;

const LongDescription = styled.div`
  max-width: 400px;
  justify-self: center;
  margin: 0;
  padding: 2rem;
  p {
    margin: 0;
  }
  @media (max-width: 990px) {
    width: 1fr;
  }
`;

const AdditionalInfo = styled.div`
  background-color: #111;
  display: grid;
  color: white;
`;

const ContentC = ({ data }) => (
  <ContentContainer>
    <ItemContainer>
      {data.map(edges => (
        <ContentItem key={edges.node.id}>
          <ContentImage src={edges.node.logo.file.url} />
          <ProjectTitle href={edges.node.projectUrl}>
            {edges.node.projectTitle}
          </ProjectTitle>
          <ProjectDescription>
            {edges.node.projectShortDescription}
          </ProjectDescription>
          <AdditionalInfo>
            <Screenshot src={edges.node.screenshot.file.url} />
          </AdditionalInfo>
          <AdditionalInfo>
            <LongDescription
              dangerouslySetInnerHTML={{
                __html: edges.node.contentText.childMarkdownRemark.html
              }}
            />
          </AdditionalInfo>
        </ContentItem>
      ))}
    </ItemContainer>
  </ContentContainer>
);

export default ContentC;
