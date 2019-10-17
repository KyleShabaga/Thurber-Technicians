import React from "react"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import ProjectTable from "../components/table/projecttable"
import { isAuthenticated, login } from "../utils/auth"

const Projects = ({ location }) => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <ProjectTable />
    </Layout>
  )
}

export default Projects
