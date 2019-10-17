import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { Navbar, Nav, Button } from "react-bootstrap"
import { IoIosSearch } from "react-icons/io"
import "./nav.css"
import Loginsection from "./login"

const searchIndices = [
  { name: `Posts`, title: `Documentation`, hitComp: `PostHit` },
]

const MainNavbar = () => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="#192532"
      variant="dark"
      className="nav__height"
    >
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt="Thurber Logo"
          width="40"
          height="40"
          className="d-inline-block align-center"
        />
        Technicians
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className=""
        id="responsive-navbar-nav"
        style={{ backgroundColor: "#192532" }}
      >
        <Nav className="ml-auto mr-auto">
          <Nav.Link>
            <Link
              fade
              className="nav__item-link"
              activeClassName="nav__item-active"
              to="/"
            >
              Technician Portal
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              fade
              className="nav__item-link"
              activeClassName="nav__item-active"
              to="/doc"
            >
              Documentation
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              className="nav__item-link"
              activeClassName="nav__item-active"
              to="/projects"
            >
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              className="nav__item-link"
              activeClassName="nav__item-active"
              to="/changes"
            >
              Changelog
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Loginsection />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNavbar
