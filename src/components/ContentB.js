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
`;

const Headline1 = styled.h1`
  grid-column: span 2;
  justify-self: start;
  align-self: end;
`;
const Headline2 = styled.h2`
  grid-column: span 2;
  justify-self: start;
  align-self: start;
  padding-bottom: 2rem;
`;
const MainText1 = styled.p`
  max-width: 500px;
  justify-self: end;
  margin: 0;
  p {
    margin: 0;
  }
`;
const MainText2 = styled.p`
  max-width: 500px;
  justify-self: start;
  margin: 0;
  p {
    margin: 0;
  }
`;

const ItemContainer = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(6, auto);
`;

const ContentItem = styled.div`
  padding: 0.5rem;
  display: grid;
  justify-items: start;
  align-items: center;
  min-width: 320px;
  background: #222;
  border-radius: 10px;
  background-image: linear-gradient(black, white);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: black;
`;

const ContentImage = styled.img`
  margin: 0;
  height: 100px;
  width: auto;
  grid-row: 1;
  justify-self: center;
  align-self: center;
  border-radius: 3rem;
`;

const ProjectTitle = styled.a`
  justify-self: center;
  font-size: 2rem;
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
