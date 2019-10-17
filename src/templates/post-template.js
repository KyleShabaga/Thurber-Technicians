import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import EmbeddedEntry from "../components/embeddedEntry"
import Layout from "../layouts/index"
import BreadCrumb from "../components/breadcrumb/breadcrumb"
import InlineEmbeddedEntry from "../components/inlineEmbeddedEntry"
import UnderNavDoc from "../components/Undernav/UndernavDoc"
import SideTOC from "../components/SideTOC/sideTOC"
import InlineHyperlink from "../components/InlineHyperlink/index"
import { login, isAuthenticated, getProfile } from "../utils/auth"

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      slug
      category {
        title
        slug
        post {
          title
          slug
        }
      }
      body {
        json
        content {
          data {
            target {
              fields {
                title {
                  en_US
                }
                slug {
                  en_US
                }
                shortDescription {
                  en_US
                }
                file {
                  en_US {
                    contentType
                    details {
                      size
                    }
                    url
                    fileName
                  }
                }
              }
            }
          }
          content {
            data {
              target {
                fields {
                  title {
                    en_US
                  }
                  slug {
                    en_US
                  }
                  shortDescription {
                    en_US
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const options = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      return (
        <InlineEmbeddedEntry
          title={node.data.target.fields.title["en-US"]}
          slug={node.data.target.fields.slug["en-US"]}
          description={node.data.target.fields.shortDescription["en-US"]}
          categorySlug={
            node.data.target.fields.category["en-US"].fields.slug["en-US"]
          }
        />
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      return (
        <EmbeddedEntry
          title={node.data.target.fields.title["en-US"]}
          description={node.data.target.fields.shortDescription["en-US"]}
          slug={node.data.target.fields.slug["en-US"]}
          categorySlug={
            node.data.target.fields.category["en-US"].fields.slug["en-US"]
          }
        />
      )
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <Image
          thumbnail
          src={node.data.target.fields.file["en-US"].url}
          fluid
          className="mx-auto d-block"
        />
      )
    },
    [INLINES.ASSET_HYPERLINK]: node => {
      return (
        <InlineHyperlink
          url={node.data.target.fields.file["en-US"].url}
          size={node.data.target.fields.file["en-US"].details.size}
          title={node.data.target.fields.file["en-US"].fileName}
        />
      )
    },
  },
}

const PostTemplate = ({ data: { post }, location }) => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Layout location={location}>
      <SEO title={post.title} />
      <UnderNavDoc />
      <Container className="mt-5 mb-2 pb-2">
        <Row className="mb-5">
          <Col md="auto" className="d-sm-none d-none d-md-block">
            <SideTOC
              categorySlug={post.category.slug}
              categoryTitle={post.category.title}
              categoryPosts={post.category.post}
            />
          </Col>

          <Col>
            <BreadCrumb
              slug={`/doc/${post.category.slug}`}
              currentPage={post.title}
              category={post.category.title}
            />
            <div>{documentToReactComponents(post.body.json, options)}</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default PostTemplate
