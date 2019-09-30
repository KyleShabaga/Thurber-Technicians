import React from "react"
import { Container, Nav, Button, Navbar } from "react-bootstrap"
import { Link } from "gatsby"

const UnderNav = () => {
  return (
    <Navbar expand="lg" variant="light" className="underBar">
      <Container>
        <Navbar.Brand>Technician Portal</Navbar.Brand>
        <Nav className="ml-auto ">
          <Link to="/support">
            <Nav.Link>Support </Nav.Link>
          </Link>
          <Link to="/doc/thurber-basics/welcome-to-thurber">
            <Button variant="outline-primary" className="btn-sm">
              Get Started
            </Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default UnderNav
