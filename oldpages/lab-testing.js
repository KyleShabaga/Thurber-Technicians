import React from "react"
import SEO from "../src/components/seo"
import Layout from "../src/layouts/index"
import UnderNavDoc from "../src/components/Undernav/UndernavDoc"
import SideTOC from "../src/components/SideTOC/sideTOC"
import PostPreview from "../src/components/postpreview/postpreview"
import { useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const LabTesting = ({ location }) => {
  const data = useStaticQuery(graphql`
    query LabTestingPosts {
      post: contentfulCategory(slug: { eq: "lab-testing" }) {
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
  `)

  return (
    <Layout location={location}>
      <UnderNavDoc />
      <SEO title="Concrete" />
      <Container>
        <Row className="mt-5">
          <Col md="auto">
            <SideTOC category={data.post.title} />
          </Col>

          <Col className="justify-content-center">
            {" "}
            {data.post.post.map(posts => (
              <PostPreview
                key={posts.id}
                title={posts.title}
                description={posts.shortDescription}
                slug={`/doc/${data.post.slug}/${posts.slug}`}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default LabTesting
