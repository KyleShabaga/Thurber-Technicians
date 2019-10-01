const categoryQuery = `{
  category: allContentfulCategory {
    edges {
      node {
        title
        slug
        post {
          title
        }
      }
    }
  }
}
`

const postQuery = `{
  posts: allContentfulPost {
    edges {
      node {
        slug
        title
        shortDescription
        category {
          title
          slug
        }
      }
    }
  }
}
`

const queries = [
  {
    query: categoryQuery,
    transformer: ({ data }) => data.category.edges.map(({ node }) => node),
    indexName: `Categorys`,
  },
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(({ node }) => node),
    indexName: `Posts`,
  },
]

module.exports = queries
