import React from "react"
import Document from "../components/document/index"
import SEO from "../components/seo"
import Layout from "../layouts/index"
import UnderNavDoc from "../components/Undernav/UndernavDoc"
import { Container } from "react-bootstrap"
import Search from "../components/search"
import { login, isAuthenticated } from "../utils/auth"

const searchIndices = [
  { name: `Posts`, title: `Documentation`, hitComp: `PostHit` },
]

const Documentation = ({ location }) => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  return (
    <Layout location={location}>
      <UnderNavDoc />
      <SEO title="Documentation" />
      <Search collapse indices={searchIndices} />

      <Container>
        <Document />
      </Container>
    </Layout>
  )
}

export default Documentation
