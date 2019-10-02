import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default () => (
  <Container>
    <Row className="justify-content-center">
      <Col>
        <div className="change__box">
          <h1>Newest Feature</h1>
          <ul>
            <li>Document Page search is working</li>
          </ul>
        </div>

        <div className="change__box">
          <h2>Future Features</h2>
          <ul>
            <li>Account Creation</li>
            <li>Training and Certification tracking</li>
            <li>Detailed Project information</li>
            <li>Training Checklists for new hires</li>
          </ul>
        </div>

        <div className="change__box">
          <h3>Know Bugs</h3>
          <ul>
            <li>Menus when viewed on mobile look wonky</li>
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
