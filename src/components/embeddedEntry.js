import React from "react"
import { Card } from 'react-bootstrap'

const EmbeddedEntry = ({ title, description, slug, categorySlug}) => {
  return (
    <Card className="card-border my-4" style={{ width: "26rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text className="mb-2 text-muted">{description}
        </Card.Text>
        <Card.Link href={`/doc/${categorySlug}/${slug}`}>View Doc</Card.Link>

      </Card.Body>
    </Card>
  )
}

export default EmbeddedEntry
