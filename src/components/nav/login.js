import React from "react"
import { Nav } from "react-bootstrap"
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"

const LoginSection = () => {
  if (!isAuthenticated()) {
    return (
      <Nav.Link
        href="#logout"
        onClick={e => {
          login()
          e.preventDefault()
        }}
      >
        Log in
      </Nav.Link>
    )
  }

  return (
    <Nav.Link
      href="#logout"
      onClick={e => {
        logout()
        e.preventDefault()
      }}
    >
      Log out
    </Nav.Link>
  )
}

export default LoginSection
