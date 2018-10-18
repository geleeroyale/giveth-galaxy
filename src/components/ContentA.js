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
`;
const ContentImage = styled.img`
  max-width: 400px;
  grid-row: span 4;
  justify-self: end;
`;
const Headline1 = styled.h1`
  align-self: end;
`;
const Headline2 = styled.h2`
  align-self: start;
`;
const MainText = styled.div`
  max-width: 500px;
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
