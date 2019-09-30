import React from "react"
import PropTypes from "prop-types"
import MainNavbar from "../components/nav/index"

import {  useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import "./layout.css"

// import Transition from "../components/transitions"

const Layout = ({ children, location }) => {
  // eslint-disable-next-line
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MainNavbar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// -----------------------------------------------
