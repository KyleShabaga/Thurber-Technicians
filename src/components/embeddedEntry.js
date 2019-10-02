import React from "react"
import { Card } from "react-bootstrap"
import { Link } from 'gatsby'

const EmbeddedEntry = ({ title, description, slug, categorySlug }) => {
  return (
    <Card className="card-border my-4" style={{ width: "26rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text className="mb-2 text-muted">{description}</Card.Text>
        <Card.Text>
          <Link to={`/doc/${categorySlug}/${slug}`}>View Doc</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EmbeddedEntry
