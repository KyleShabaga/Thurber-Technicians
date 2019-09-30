import React from "react"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import ProjectTable from "../components/table/projecttable"

const Projects = ({location}) => (
  <Layout location={location}>
    <SEO title="Projects" />
    <ProjectTable />

  </Layout>
)

export default Projects
