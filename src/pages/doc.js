import React from "react"
import Document from "../components/document/index"
import SEO from "../components/seo"
import Layout from "../layouts/index"
import UnderNavDoc from "../components/Undernav/UndernavDoc"
import SearchBox from "../components/searchbox/SearchBox"
import { Container } from "react-bootstrap"


const Documentation = ({location}) => (

  <Layout location={location}>
    <UnderNavDoc />
    <SEO title="Documentation" />
    <SearchBox />
    <Container>
      <Document />
    </Container>
  </Layout>
)

export default Documentation
