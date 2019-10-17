import React from "react"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import Home from "../components/HomePage/home"
import UnderNav from "../components/Undernav/Undernav"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <UnderNav />
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}
export default IndexPage
