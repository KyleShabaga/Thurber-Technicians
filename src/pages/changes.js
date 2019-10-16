import React from "react"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import Changelogbox from "../components/changelogstuff/changelogbox"
import { isAuthenticated, login, getProfile } from "../utils/auth"

const Changes = ({ location }) => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Layout location={location}>
      <SEO title="Changes" />
      <Changelogbox />
    </Layout>
  )
}

export default Changes
