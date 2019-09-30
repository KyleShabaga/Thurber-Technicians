import React from "react"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import ProjectTable from "../components/table/projecttable"

//search bar
// import Search from "../components/search/index"
// const searchIndices = [
//   { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
//   { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
// ]

const Projects = ({location}) => (
  <Layout location={location}>
    <SEO title="Projects" />
    <ProjectTable />
     {/* <Search collapse indices={searchIndices} /> */}
  </Layout>
)

export default Projects
