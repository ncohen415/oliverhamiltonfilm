const path = require("path")

//Create WP Pages
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    query DynamicPageQuery {
      allWpPage {
        edges {
          node {
            slug
          }
        }
      }
      allWpProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  //Project Pages
  pages.data?.allWpProject.edges.forEach(edge => {
    createPage({
      path: `/project/${edge.node.slug}`,
      component: path.resolve("./src/templates/ProjectPageTemplate.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  //WP Pages
  pages.data?.allWpPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve("./src/templates/WpPageTemplate.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
