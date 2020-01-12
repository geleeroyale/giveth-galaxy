import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/presets'

const ContentContainer = styled.div`
  padding: 5vh 0;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 640px) {
    padding: 1rem 0;
  }
`
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
    padding-bottom: 1rem;
  }
`

const Headline1 = styled.h1`
  grid-column: span 2;
  align-self: end;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
const Headline2 = styled.h2`
  grid-column: span 2;
  align-self: start;
  padding-bottom: 2rem;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
const Headline3 = styled.h1`
  opacity: 0.3;
  text-align: center;
  padding-bottom: 2rem;
  @media (max-width: 990px) {
    justify-self: center;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`

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
`
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
`

const ItemContainer = styled.div`
  display: grid;
  padding-bottom: 10vh;
  grid-gap: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
`

const ContentItem = styled.div`
  position: relative;
  padding: 0.5rem;
  display: grid;
  justify-self: stretch;
  align-self: center;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    ${colors.nav_bg} 100%
  );
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2) translateY(-3px);
    background-color: ${colors.theme};

    @media (max-width: 640px) {
      background-color: black;
      transform: scale(1) translateY(0px);
    }
  }

  @media (max-width: 640px) {
    border: 1px solid ${colors.highlight};
    grid-column: span 1;
  }
`

const ContentItem2 = styled.div`
  padding: 0.5rem;
  display: grid;
  justify-self: stretch;
  align-self: center;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    ${colors.nav_bg} 100%
  );
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  :hover {
    transform: scale(1.2) translateY(-3px);
    background-color: ${colors.theme};

    @media (max-width: 640px) {
      background-color: black;
      transform: scale(1) translateY(0px);
    }
  }

  @media (max-width: 640px) {
    border: 1px solid ${colors.highlight};
  }
`

const UpperCard = styled.div`
  display: grid;
  color: ${colors.white};
  border-radius: 10px;
`

const ContentImage = styled.img`
  padding: 1rem;
  margin: 0;
  max-height: 200px;
  width: auto;
  grid-row: 1;
  justify-self: center;
  align-self: center;
`

const ProjectTitle = styled.a`
  justify-self: center;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 100;
  grid-row: 2;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  color: ${colors.theme};

  :hover {
    transform: scale(1.2) translateY(-3px);
  }
`

const UpperCardLink = styled.a`
  display: grid;
`

const ProjectDescription = styled.p`
  padding-top: 1rem;
  text-align: center;
  grid-row: 3;
  color: ${colors.light};
  font-weight: 300;
`

const ContentB = ({ headerdata, planetsdata, starsdata }) => (
  <ContentContainer>
    <ContentHeader>
      <Headline1>{headerdata.node.headline1}</Headline1>
      <Headline2>{headerdata.node.headline2}</Headline2>
      <MainText1
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText.childMarkdownRemark.html,
        }}
      />
      <MainText2
        dangerouslySetInnerHTML={{
          __html: headerdata.node.contentText2.childMarkdownRemark.html,
        }}
      />
    </ContentHeader>
    <Headline3>Giveth Planets</Headline3>
    <ItemContainer>
      {planetsdata.map(edges => (
        <ContentItem key={edges.node.id}>
          <UpperCardLink href={edges.node.projectUrl}>
            <ProjectTitle>{edges.node.projectTitle}</ProjectTitle>
            <UpperCard />
            <ContentImage src={edges.node.logo.file.url} />

            <ProjectDescription>
              {edges.node.projectShortDescription}
            </ProjectDescription>
          </UpperCardLink>
        </ContentItem>
      ))}
    </ItemContainer>
    <Headline3>Giveth Stars</Headline3>
    <ItemContainer>
      {starsdata.map(edges => (
        <ContentItem2 key={edges.node.id}>
          <UpperCardLink href={edges.node.projectUrl}>
            <UpperCard>
              <ContentImage src={edges.node.logo.file.url} />
            </UpperCard>
            <ProjectTitle href={edges.node.projectUrl}>
              {edges.node.projectTitle}
            </ProjectTitle>
            <ProjectDescription>
              {edges.node.projectShortDescription}
            </ProjectDescription>
          </UpperCardLink>
        </ContentItem2>
      ))}
    </ItemContainer>
  </ContentContainer>
)

export default ContentB
