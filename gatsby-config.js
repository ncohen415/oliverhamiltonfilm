require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Oliver Hamilton Film`,
    description: ``,
    author: ``,
    siteUrl: `https://oliverhamilton.tv`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "https://oliverhamiltonfilm.nlcdev.site/graphql" || ``,
        verbose: true,
        useACF: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          allow404Images: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
          MediaItem: {
            localFile: {
              requestConcurrency: 50,
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/shutter.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}



// {
//   resolve: `gatsby-source-wordpress`,
//   options: {
//     url: process.env.WPGRAPHQL_URL || ``,
//     verbose: true,
//     develop: {
//       hardCacheMediaFiles: true,
//     },
//     debug: {
//       graphql: {
//         writeQueriesToDisk: true,
//       },
//     },
//     production: {
//       allow404Images: true,
//     },
//     type: {
//       Post: {
//         limit:
//           process.env.NODE_ENV === `development`
//             ? // Lets just pull 50 posts in development to make it easy on ourselves.
//               50
//             : // and we don't actually need more than 5000 in production for this particular site
//               5000,
//       },
//       MediaItem: {
//         localFile: {
//           requestConcurrency: 50,
//         },
//       },
//     },
//   },
// },