import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  padding: 20vh 0;
`;
const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, minmax(320px 1fr));
  grid-gap: 0rem 1rem;
  padding-bottom: 3rem;

  @media (max-width: 990px) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    justify-items: center;
  }
`;

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
`;
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
`;
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
`;
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
`;

const ItemContainer = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(6, auto);
  justify-items: center;
`;

const ContentItem = styled.div`
  padding: 0.5rem;
  display: grid;
  justify-self: stretch;
  align-self: center;
  background: #222;
  border-radius: 10px;
  background-image: linear-gradient(black, white);
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  color: black;
`;

const ContentImage = styled.img`
  padding: 0.5rem;
  height: 60px;
  width: auto;
  grid-row: 1;
  justify-self: center;
  align-self: center;
  border-radius: 3rem;
`;

const ProjectTitle = styled.a`
  justify-self: center;
  font-size: 1.5rem;
  font-weight: 100;
  grid-row: 2;
  background-color: black;
  border-radius: 30px;
  margin: 1rem;
  padding: 0 1rem;
`;

const ProjectDescription = styled.p`
  justify-self: center;
  grid-row: 3;
`;

const ContentB = ({ headerdata, data }) => (
  <ContentContainer>
    <ContentHeader>
      <Headline1>{headerdata.node.headline1}</Headline1>
      <Headline2>{headerdata.node.headline2}</Headline2>
      <MainText1
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText.childMarkdownRemark.html
        }}
      />
      <MainText2
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText2.childMarkdownRemark.html
        }}
      />
    </ContentHeader>
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
        </ContentItem>
      ))}
    </ItemContainer>
  </ContentContainer>
);

export default ContentB;
