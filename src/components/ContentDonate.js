import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

const ContentContainer = styled.div`
  padding: 20vh 0;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
`;
const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, minmax(320px 1fr));
  grid-gap: 0rem 1rem;
  padding-bottom: 5rem;

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

const Headline3 = styled.h3`
  @media (max-width: 990px) {
    justify-self: center;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const HeadlineFaq = styled.h1`
  color: black;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 20px;
  margin-bottom: 1rem;
  background-color: #e01c6b;
  @media (max-width: 990px) {
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

const ItemContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem 2rem;
  justify-items: center;
  opacity: 0.6;
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

const ContentItem = styled.div`
  padding: 0.5rem;
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-self: center;
  align-self: center;
  background: #e4d1d9;
  border-radius: 10px;
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  color: black;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 0;
  }

  .Collapsible__trigger :hover {
    cursor: pointer;
    background-color: #ccb7c9;
  }
`;

const LongDescription = styled.div`
  max-width: 500px;
  justify-self: center;
  margin: 0;
  padding: 2rem;
  p {
    margin: 0;
  }
  @media (max-width: 990px) {
    max-width: 1fr;
  }
`;

const ContentDonate = ({ headerdata, data }) => (
  <ContentContainer>
    <ContentHeader>
      <Headline1>{headerdata.node.headline1}</Headline1>
      <Headline2>{headerdata.node.headline2}</Headline2>
      <MainText1
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText.childMarkdownRemark.html
        }}
      />
    </ContentHeader>
    <HeadlineFaq>FAQ</HeadlineFaq>
    <ItemContainer>
      {data.map(edges => (
        <ContentItem key={edges.node.id}>
          <Collapsible trigger={edges.node.headline}>
            <LongDescription
              dangerouslySetInnerHTML={{
                __html: edges.node.contentText.childMarkdownRemark.html
              }}
            />
          </Collapsible>
        </ContentItem>
      ))}
    </ItemContainer>
  </ContentContainer>
);

export default ContentDonate;
