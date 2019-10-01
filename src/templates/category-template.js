import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../layouts/index"
import UnderNavDoc from "../components/Undernav/UndernavDoc"
import SideTOC from "../components/SideTOC/sideTOC"
import PostPreview from "../components/postpreview/postpreview"

export const query = graphql`
  query($categoryslug: String!) {
    category: contentfulCategory(slug: { eq: $categoryslug }) {
      title
      slug
      post {
        title
        shortDescription
        slug
        id
      }
    }
  }
`

const CategoryTemplate = ({ data, location }) => (
  <Layout location={location}>
    <SEO title={data.category.title} />
    <UnderNavDoc />
    <Container>
      <Row className="mt-5">
        <Col md="auto">
          <SideTOC
            categorySlug={data.category.slug}
            categoryTitle={data.category.title}
            categoryPosts={data.category.post}
          />
        </Col>

        <Col className="justify-content-center">
          {data.category.post.map(posts => (
            <PostPreview
              key={posts.id}
              title={posts.title}
              description={posts.shortDescription}
              slug={`/doc/${data.category.slug}/${posts.slug}`}
            />
          ))}
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default CategoryTemplate
