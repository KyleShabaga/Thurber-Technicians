import React from "react"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import { Link } from "gatsby"

const CategoryBreadCrumb = ({ currentPage }) => {
  return (
    <Breadcrumb className="bread-crumb">
      <Breadcrumb.Item>
        <Link to="/doc">Documentation</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{currentPage}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default CategoryBreadCrumb
