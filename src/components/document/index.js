import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import PostPreview from "../postpreview/postpreview"

export default () => {
  const data = useStaticQuery(graphql`
    query AllPosts {
      posts: allContentfulPost(
        sort: {
          fields: [title]
          order: ASC
        }
      ) {
        edges {
          node {
            id
            title
            slug
            shortDescription
            body {
              id
              nodeType
              body
            }
            category {
              title
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Container className="mt-5">
      {data.posts.edges.map(edge => (
        <PostPreview
          key={edge.node.id}
          title={edge.node.title}
          description={edge.node.shortDescription}
          slug={`/doc/${edge.node.category.slug}/${edge.node.slug}`}
          category={edge.node.category.title}
        />
      ))}
    </Container>
  )
}
