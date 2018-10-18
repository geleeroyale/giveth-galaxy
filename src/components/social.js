import React from "react";
import styled from "styled-components";
import {
  FaMedium,
  FaComments,
  FaTwitter,
  FaGithub,
  FaReddit,
  FaFacebook,
  FaYoutube,
  FaWikipediaW
} from "react-icons/fa";

const SocialContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const LinkContainer = styled.div`
  display: grid;
  padding-top: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  justify-content: space-evenly;
`;

const SocialLink = styled.a`
  justify-self: center;
  font-size: 2rem;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2) translateY(-3px);
    color: white;
  }
`;

const Social = () => (
  <SocialContainer>
    <LinkContainer>
      <SocialLink href="https://medium.com/giveth/">
        <FaMedium />
      </SocialLink>
      <SocialLink href="/join">
        <FaComments />
      </SocialLink>
      <SocialLink href="https://twitter.com/givethio">
        <FaTwitter />
      </SocialLink>
      <SocialLink href="https://github.com/giveth">
        <FaGithub />
      </SocialLink>
      <SocialLink href="https://reddit.com/r/giveth">
        <FaReddit />
      </SocialLink>
      <SocialLink href="https://facebook.com/givethio">
        <FaFacebook />
      </SocialLink>
      <SocialLink href="https://www.youtube.com/channel/UClfutpRoY0WTVnq0oB0E0wQ">
        <FaYoutube />
      </SocialLink>
      <SocialLink href="https://wiki.giveth.io">
        <FaWikipediaW />
      </SocialLink>
    </LinkContainer>
  </SocialContainer>
);

export default Social;
