import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ContentDonate from "../components/ContentDonate";

const Gradient1 = styled.div`
  padding: 10vh 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #2c0b3f 100%);
  height: 100%;
`;

const DonationPage = ({ data }) => (
  <Layout>
    <Gradient1>
      <ContentDonate
        headerdata={data.contentDonate.edges[0]}
        data={data.contentDonateFaq.edges}
      />
    </Gradient1>
  </Layout>
);

export default DonationPage;

export const query = graphql`
  query DonateQuery {
    contentDonate: allContentfulContentDonate {
      edges {
        node {
          headline1
          headline2
          contentText {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentDonateFaq: allContentfulContentDonateFaq {
      edges {
        node {
          id
          headline
          contentText {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
