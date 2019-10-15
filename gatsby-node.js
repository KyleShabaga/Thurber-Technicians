/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulCategory {
        nodes {
          slug
          title
          post {
            title
            slug
            shortDescription
            id
          }
        }
      }
      allContentfulPost {
        nodes {
          slug
          category {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("Error loading posts", JSON.stringify(result.error))
  } else {
    result.data.allContentfulPost.nodes.forEach(post => {
      actions.createPage({
        path: `/doc/${post.category.slug}/${post.slug}`,
        component: require.resolve("./src/templates/post-template.js"),
        context: {
          slug: post.slug,
        },
      })
    })

    result.data.allContentfulCategory.nodes.forEach(category => {
      actions.createPage({
        path: `/doc/${category.slug}`,
        component: require.resolve("./src/templates/category-template.js"),
        context: {
          categoryslug: category.slug,
        },
      })
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions
//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/account/)) {
//     page.matchPath = "/account/*"
//     // Update the page.
//     createPage(page)
//   }
// }
