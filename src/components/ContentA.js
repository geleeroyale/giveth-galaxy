import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  padding: 20vh 0;
  display: grid;
  grid-template-columns: 1fr;
`;
const ContentItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-gap: 0 3rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const ContentImage = styled.img`
  max-width: 400px;
  grid-row: span 4;
  justify-self: end;
  @media (max-width: 800px) {
    justify-self: center;
    padding-bottom: 3rem;
    max-width: 280px;
  }
`;
const Headline1 = styled.h1`
  align-self: end;

  @media (max-width: 640px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
const Headline2 = styled.h2`
  align-self: start;

  @media (max-width: 640px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
const MainText = styled.div`
  max-width: 300px;
  margin: 0;

  p {
    margin: 0;
  }
`;
const DetailsLink = styled.a``;

const ContentA = ({ data }) => (
  <ContentContainer>
    <ContentItem key={data.node.id}>
      <ContentImage src={data.node.image.file.url} />
      <Headline1>{data.node.headline1}</Headline1>
      <Headline2>{data.node.headline2}</Headline2>
      <MainText
        dangerouslySetInnerHTML={{
          __html: data.node.contentText.childMarkdownRemark.html
        }}
      />
      <DetailsLink href={data.node.readMoreLink}>... read more</DetailsLink>
    </ContentItem>
  </ContentContainer>
);

export default ContentA;
