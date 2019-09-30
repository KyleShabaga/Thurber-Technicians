import React from "react"
import { Link } from "gatsby"
import "./postpreview.css"
import { Row } from "react-bootstrap"

const PostPreview = ({ title, description, key, slug, category }) => {
  return (
    <Row className='justify-content-center'>
      <div key={key} className="post__container">
        <h3>{title}</h3>
        <h5 className='text-muted'>{category}</h5>
        <p>{description}</p>
        <Link to={`/${slug}`}>View Doc</Link>
      </div>
    </Row>
  )
}

export default PostPreview
