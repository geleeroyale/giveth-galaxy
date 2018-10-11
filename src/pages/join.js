import React from "react";
import { Link } from "gatsby";

// import join.scss from "../components/join.scss";

import Layout from "../components/layout";

const Join = () => (
  <Layout>
    <div id="join" className="container-fluid section">
      <div className="flex-row">
        <div className="flex-column">
          <div className="col grid_1_of_2">
            <h2>JOIN</h2>
            <h2>THE</h2>
            <h2>COMMUNITY</h2>
          </div>

          <div className="col grid_1_of_2">
            <h3 className="color-green">Riot.im</h3>
            <p>
              Riot is a productivity tool with a mission to decentralize work
              communication. As a Decentralized Altruistic Community (DAC) we
              are enthusiastic supporters of this open-source initiative.
            </p>
            <h4 className="color-green">
              Simply join any of our rooms to start chatting!
            </h4>
            <p>
              Find more info on why we are migrating and some practical tips
              <a href="https://wiki.giveth.io/tutorials/riot-migration/">
                {" "}
                on our Wiki
              </a>
            </p>
            <p>
              <a
                href="https://riot.im/app/#/group/+giveth:matrix.org"
                className="btn btn-warning"
              >
                Join us on Riot
              </a>
              <a href="" />
            </p>
          </div>

          <div className="col grid_1_of_2">
            <h3 className="color-grey">Slack</h3>
            <p>
              We started our Community on Slack, but because of its centralized
              and paying model we are looking into new options. If you prefer to
              use Slack to talk to us, sign up below!
              <br />
              <br />
              <a href="http://slack.giveth.io" className="btn btn-info">
                Join us on Slack
              </a>
              <a href="" />
            </p>
          </div>
        </div>
      </div>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Join;
