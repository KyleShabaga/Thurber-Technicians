import React from "react"
import SEO from "../components/seo"
import Layout from "../layouts/index"
import { Container, Row } from "react-bootstrap"

const SignUp = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Sign Up" />
      <Container>
        <Row className="mt-5">
          <h1>Coming Soon!</h1>
        </Row>
      </Container>
    </Layout>
  )
}

export default SignUp
