import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const DonationPage = ({ data }) => (
  <Layout>
    <Img
      fluid={data.imageOne.childImageSharp.fluid}
      style={{
        position: "relative",
        left: 0,
        top: 0,
        width: "100%",
        height: "100vh"
      }}
    />
    <Img
      fluid={data.imageTwo.childImageSharp.fluid}
      style={{
        position: "relative",
        left: 0,
        top: 0,
        width: "100%",
        height: "100vh"
      }}
    />
  </Layout>
);

export default DonationPage;

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "earth.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "m82.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
