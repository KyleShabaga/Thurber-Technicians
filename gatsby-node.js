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
