import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../layouts/index"
import UnderNavDoc from "../components/Undernav/UndernavDoc"
import SideTOC from "../components/SideTOC/sideTOC"
import PostPreview from "../components/postpreview/postpreview"
import { login, isAuthenticated } from "../utils/auth"
import CategoryBreadCrumb from "../components/breadcrumb/category-breadcrumb"

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
function compare(a, b) {
  const titleA = a.title.toUpperCase(),
    titleB = b.title.toUpperCase()

  let comparison = 0

  if (titleA > titleB) {
    comparison = 1
  } else if (titleA < titleB) {
    comparison = -1
  }
  return comparison
}

const CategoryTemplate = ({ data, location }) => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  return (
    <Layout location={location}>
      <SEO title={data.category.title} />
      <UnderNavDoc />
      <Container>
        <Row className="mt-5">
          <Col md="auto" className="d-sm-none d-none d-md-block">
            <SideTOC
              categorySlug={data.category.slug}
              categoryTitle={data.category.title}
              categoryPosts={data.category.post}
            />
          </Col>

          <Col className="justify-content-center">
            <CategoryBreadCrumb 
              currentPage={data.category.title}
            />
            {data.category.post.sort(compare).map(posts => (
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
}

export default CategoryTemplate
