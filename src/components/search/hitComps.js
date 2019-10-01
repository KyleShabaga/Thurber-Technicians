import React from "react"
import { Highlight } from "react-instantsearch-dom"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import "../postpreview/postpreview.css"

export const CategoryHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={`/${hit.slug}`} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
  </div>
)

export const PostHit = clickHandler => ({ hit }) => (
  <Row className="justify-content-center">
    <Col>
      <div className="posthit__container">
        <Link to={`/doc/${hit.category.slug}/${hit.slug}`} onClick={clickHandler}>
          <h3>
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </h3>
        </Link>

        <h5 className="text-muted">
          <Highlight attribute="category.title" hit={hit} tagName="mark" />
        </h5>
        <div>
          <Highlight attribute="shortDescription" hit={hit} tagName="mark" />
        </div>
      </div>
    </Col>
  </Row>
)
