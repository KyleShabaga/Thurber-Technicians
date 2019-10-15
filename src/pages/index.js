import React from "react"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import Home from "../components/HomePage/home"
import UnderNav from "../components/Undernav/Undernav"
import { login } from "../utils/auth"

const IndexPage = ({ location }) => {
  login()

  return (
    <Layout location={location}>
      <UnderNav />
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}
export default IndexPage
