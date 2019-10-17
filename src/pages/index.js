import React from "react"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import Home from "../components/HomePage/home"
import UnderNav from "../components/Undernav/Undernav"
import Search from "../components/search"

const searchIndices = [
  { name: `Posts`, title: `Documentation`, hitComp: `PostHit` },
]

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <UnderNav />
      <SEO title="Home" />
      <Home />
      <Search collapse indices={searchIndices} />
    </Layout>
  )
}
export default IndexPage
