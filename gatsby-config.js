require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Giveth",
    description:
      "A community of developers - Building the future of Giving - #blockchainforgood",
    keywords: "donation, ethereum, blockchain, crypto, dapp, donate, eth"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#000",
        theme_color: "#422453",
        display: "minimal-ui",
        icon: "src/images/giveth-favicon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ]
      }
    }
  ]
};
