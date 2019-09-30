import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
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

//-----------------------------

//
//   /* <div className="article-toc">
// <ul className="toc">
//   <li className="toc-header">
//     <Link to={`/doc/${data.category.slug}`}>
//       {data.category.title}
//     </Link>
//   </li>
//   <li>
//     <ul className="toc-ul">
//       {data.category.post.map(categoryTitles => (
//         <Link
//           to={`/doc/${data.category.slug}/${categoryTitles.slug}`}
//           activeClassName="toc-active"
//           partiallyActive={true}
//         >
//           <li className="toc-content">{categoryTitles.title}</li>
//         </Link>
//       ))}
//     </ul>
//   </li>
// </ul>
// </div> */
//
