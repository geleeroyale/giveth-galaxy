import React from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'

const ContentContainer = styled.div`
  padding: 20vh 0;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
`
const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(320px 1fr) minmax(320px 1fr);
  grid-template-rows: repeat(5, auto);
  padding-bottom: 5rem;
  justify-self: center;

  @media (max-width: 990px) {
    grid-gap: 0.5rem;
    justify-items: center;
    grid-template-columns: minmax(320px 1fr);
  }
`

const Headline1 = styled.h1`
  grid-column: span 2;
  justify-self: start;
  align-self: end;
  @media (max-width: 640px) {
    font-size: 1.5rem;
    padding: 0 2rem;
    grid-column: span 1;
  }
`
const Headline2 = styled.h2`
  grid-column: span 2;
  justify-self: start;
  align-self: start;
  padding-bottom: 2rem;
  @media (max-width: 640px) {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    grid-column: span 1;
  }
`

const HeadlineFaq = styled.h1`
  color: black;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 20px;
  margin-bottom: 1rem;
  background-color: #e01c6b;
  @media (max-width: 640px) {
    font-size: 1.5rem;
    padding: 0 2rem;
  }
`

const MainText1 = styled.div`
  grid-column: 1;
  max-width: 500px;
  justify-self: start;
  margin: 0;
  padding-right: 1.5rem;
  p {
    margin: 0;
  }
  @media (max-width: 990px) {
    width: 1fr;
    justify-self: center;
    padding: 0 2rem;
    grid-column: span 1;
  }
`

const MainText2 = styled.div`
  grid-column: 2;
  max-width: 500px;
  justify-self: start;
  margin: 0;
  padding-left: 1.5rem;
  p {
    margin: 0;
  }
  @media (max-width: 990px) {
    width: 1fr;
    justify-self: center;
    padding: 2rem 2rem;
    grid-column: 1 / span 1;
  }
`

const ItemContainer = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem 2rem;
  justify-items: center;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`

const DonationContainer = styled.div`
  grid-column: span 2;
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem 2rem;
  justify-content: center;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-column: 1 / span 1;
  }

  p {
    margin: 0;
  }
`

const ContentItem = styled.div`
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
  padding: 0.5rem;
  @media (max-width: 990px) {
    justify-items: center;
    grid-gap: 0;
    max-width: 320px;
  }

  :hover {
    background-color: #ccb7c9;
  }

  .Collapsible__trigger {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    :hover {
      cursor: pointer;
      background-color: #ccb7c9;
    }
  }
`

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
`

const AddressHeadline = styled.p``

const Wrap = styled.p`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 500;
  color: #e01c6b;

  @media (max-width: 650px) {
    text-overflow: ellipsis;
    max-width: 80vw;
  }
`

const ContentDonate = ({ headerdata, data }) => (
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
      <DonationContainer>
        <ContentItem>
          <a href="https://www.mycrypto.com/?to=0x5ADF43DD006c6C36506e2b2DFA352E60002d22Dc&gaslimit=120000#send-transaction">
            1 - Donate ETH via MyCrypto
          </a>
        </ContentItem>
        <ContentItem>
          <a href="https://leaderboard.giveth.io">
            2 - Visit our Leaderboard and use MetaMask
          </a>
        </ContentItem>
        <ContentItem>
          <AddressHeadline>Send ETH directly to our address:</AddressHeadline>
          <Wrap>0x5adf43dd006c6c36506e2b2dfa352e60002d22dc</Wrap>
        </ContentItem>
        <ContentItem>
          <AddressHeadline>Send BTC directly to our address:</AddressHeadline>
          <Wrap>3Q3eCqvwk2JPocfMBfC6oS5iA9S9wDXgYA</Wrap>
        </ContentItem>
      </DonationContainer>
    </ContentHeader>
    <HeadlineFaq>FAQ</HeadlineFaq>
    <ItemContainer>
      {data.map(edges => (
        <ContentItem key={edges.node.id}>
          <Collapsible trigger={edges.node.headline}>
            <LongDescription
              dangerouslySetInnerHTML={{
                __html: edges.node.contentText.childMarkdownRemark.html,
              }}
            />
          </Collapsible>
        </ContentItem>
      ))}
    </ItemContainer>
  </ContentContainer>
)

export default ContentDonate
