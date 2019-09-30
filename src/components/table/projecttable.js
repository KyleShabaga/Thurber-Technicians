import React from "react"
import { Table, Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

import "./projecttable.css"

const ProjectTable = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      projects: allContentfulProjects(
        sort: { fields: [projectNumber], order: ASC }
      ) {
        edges {
          node {
            slug
            projectNumber
            projectName
            projectEngineer
            id
            client
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Row className="my-5 justify-content-center text-center align-items-center">
        <Col>
          <Table striped bordered hover responsive="sm" size="sm">
            <thead>
              <tr>
                <th>Project Number</th>
                <th>Project Name</th>
                <th>Client</th>
                <th>Project Eng</th>
              </tr>
            </thead>
            <tbody>
              {data.projects.edges.map(edge => (
                <tr key={edge.node.id}>
                  <td>{edge.node.projectNumber}</td>
                  <td>{edge.node.projectName}</td>
                  <td>{edge.node.client}</td>
                  <td>{edge.node.projectEngineer}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col><h2>Coming Soon: More projects, maps, and other features.</h2></Col>
      </Row>
    </Container>
  )
}

export default ProjectTable

//------------------------
