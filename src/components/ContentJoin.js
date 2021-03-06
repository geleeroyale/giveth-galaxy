import React from "react";
import styled from "styled-components";
import { FaSlackHash } from "react-icons/fa";

const ContentContainer = styled.div`
  padding: 20vh 0;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;

  .slackIcon {
    font-size: 8rem;
    justify-self: center;
    align-self: center;
    color: rgba(146, 128, 144, 0.2);

    @media (max-width: 650px) {
      display: none;
    }
  }
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
  color: rgba(146, 128, 144, 0.5);
  h1 {
    padding: 0.2rem;
    text-align: center;
    color: black;
    margin-bottom: 1rem;
    background-color: #e01c6b;
  }

  h3 {
    margin: 0.1rem 0;
  }
  @media (max-width: 980px) {
    grid-row: 4;
    width: 1fr;
    justify-self: center;
  }

  a {
    color: rgba(146, 128, 144, 0.5);
  }
`;

const ChatIcon = styled.img`
  justify-self: center;
  align-self: center;
  padding: 1rem;

  @media (max-width: 650px) {
    display: none;
  }
`;

const ContentJoin = ({ headerdata }) => (
  <ContentContainer>
    <ContentHeader>
      <Headline1>{headerdata.node.headline1}</Headline1>
      <Headline2>{headerdata.node.headline2}</Headline2>
      <ChatIcon
        src={require("../images/friends/riot-im-logo-animated.gif")}
        alt="riot.im logo"
        width="300px"
      />
      <MainText1
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText.childMarkdownRemark.html
        }}
      />

      <FaSlackHash className="slackIcon" />

      <MainText2
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText2.childMarkdownRemark.html
        }}
      />
    </ContentHeader>
  </ContentContainer>
);

export default ContentJoin;
