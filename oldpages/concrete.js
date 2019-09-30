import React from "react"
import SEO from "../../components/seo"
import Layout from "../../layouts/index"
import UnderNavDoc from "../../components/Undernav/UndernavDoc"
import SideTOC from "../../components/SideTOC/sideTOC"
import PostPreview from "../../components/postpreview/postpreview"
import { useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const Concrete = ({ location }) => {
  const data = useStaticQuery(graphql`
    query ConcretePosts {
      post: contentfulCategory(slug: { eq: "concrete" }) {
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

export default Concrete
