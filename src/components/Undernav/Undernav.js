import React from "react"
import { Container, Nav, Button, Navbar } from "react-bootstrap"
import { Link } from "gatsby"
import { window } from "browser-monads"

const location = () => {
  const currentLocation = window.location.href
  let newLocation = currentLocation.replace("http://localhost:8000/", "")
  if (!newLocation || newLocation === undefined) {
    return "Technician Portal"
  } else {
    const capitalized = newLocation.replace(/^./, newLocation[0].toUpperCase())
    const finishedString = capitalized.replace(/-/g, " ")
    return finishedString
  }
}

const UnderNav = () => {
  return (
    <Navbar expand="lg" variant="light" className="underBar">
      <Container>
        <Navbar.Brand>{location()}</Navbar.Brand>
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
