import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby"
import "./undernavdoc.css"


const UnderNavDoc = () => {
  return (
    <Navbar expand="md" variant="light" className="underBar">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-auto">
          <Nav.Link>
            <Link
              partiallyActive={true}
              className="doc-nav__item-link"
              activeClassName="doc-nav__item-active"
              to="/doc/thurber-basics"
            >
              Thurber Basics
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              partiallyActive={true}
              className="doc-nav__item-link"
              activeClassName="doc-nav__item-active"
              to="/doc/concrete"
            >
              Concrete
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              partiallyActive={true}
              className="doc-nav__item-link"
              activeClassName="doc-nav__item-active"
              to="/doc/field-density-testing"
            >
              Field Density Testing
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              partiallyActive={true}
              className="doc-nav__item-link"
              activeClassName="doc-nav__item-active"
              to="/doc/references"
            >
              References
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              partiallyActive={true}
              className="doc-nav__item-link"
              activeClassName="doc-nav__item-active"
              to="/doc/lab-testing"
            >
              Lab Testing
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              partiallyActive={true}
              className="doc-nav__item-link"
              activeClassName="doc-nav__item-active"
              to="/doc/tools-and-equipment"
            >
              Tools & Equipment
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default UnderNavDoc
