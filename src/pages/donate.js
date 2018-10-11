import React from "react";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import styled from "styled-components";

import Layout from "../components/layout";
import Button from "../components/button";

//
// SECTION1 - Values for Leaderboard component, set to Giveth's donation address
//

const donationAddress = "0x5adf43dd006c6c36506e2b2dfa352e60002d22dc"; //replace with the address to watch
const deploymentBlock = "4448139"; // Passing a deployment block significantly speeds up the loading process
const leaderboardType = "leaderboard"; // can be a "leaderboard" or "multisig"

const TextBlock = styled.div`
  display: block;
  max-width: 90%;

  @media (max-width: 640px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;

function LeaderboardDisplay(props) {
  if (!props.show) {
    return null;
  }

  return (
    <Leaderboard
      address={donationAddress}
      deploymentBlock={deploymentBlock}
      type={leaderboardType}
    />
  );
}

class DonationLeaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeaderboardToggle = this.handleLeaderboardToggle.bind(this);
    this.state = { LeaderboardToggle: false };
  }

  handleLeaderboardToggle() {
    this.setState(prevState => ({
      LeaderboardToggle: !prevState.LeaderboardToggle
    }));
  }
  render() {
    return (
      <Layout>
        <TextBlock>
          <h1>Who are we?</h1>
          <p>
            We are the Community building the Giveth Donation Application, the
            platform. Our system will make it possible for nonprofits and
            individuals to unite and make the world a better place, by enabling
            full transparency and accountability towards Givers. We are the
            primordial Decentralized Altruistic Community (DAC), we are the
            Giveth Unicorns, the first users of our own platform and as every
            DAC, we need Givers to support us. You could be this Giver. Why
            donate to Giveth? As opposed to traditional charity, with Giveth
            every donation and pledge is transparent, so you always know exactly
            where your donation went and get a good sense of the impact it made
            in direct communication with your beneficiary.
          </p>
        </TextBlock>
        <Button onClick={this.handleLeaderboardToggle}>
          {this.state.LeaderboardToggle
            ? "Hide Leaderboard"
            : "Show Donation Leaderboard"}
        </Button>
        <LeaderboardDisplay show={this.state.LeaderboardToggle} />
      </Layout>
    );
  }
}

export default DonationLeaderboard;
