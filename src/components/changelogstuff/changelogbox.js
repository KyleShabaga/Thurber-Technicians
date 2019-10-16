import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default () => (
  <Container>
    <Row className="justify-content-center">
      <Col>
        <div className="change__box">
          <ul>
            <li>Document Page search is working</li>
            <li>User auth added, still work in progress</li>
          </ul>
        </div>
      </Col>
    </Row>
    {/* Insert new row and add post preview of newest posts */}
  </Container>
)

//------ Display newest posts

// {
//   allContentfulPost(sort: {fields: updatedAt, order: DESC}, limit: 3) {
//     nodes {
//       slug
//       title
//       updatedAt(fromNow: true)
//       shortDescription
//     }
//   }
// }
