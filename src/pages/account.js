import React from "react"
import { Router, Link } from "@reach/router"
import { login, isAuthenticated, getProfile, logout } from "../utils/auth"

const Home = () => <p>Account Home</p>

const Settings = () => <p>Settings</p>

const Billings = () => <p>Billings</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
  }

  const user = getProfile()

  return (
    <>
      <nav>
        <Link to="/account/">Home</Link>
        <Link to="/account/settings">settings</Link>
        <Link to="/account/billings">billings</Link>
        <a
          href="#logout"
          onClick={() => {
            logout()
          }}
        >
          Logout
        </a>
      </nav>

      <Router>
        <Home path="/account/" />
        <Settings path="/account/settings" />
        <Billings path="/account/billing" />
      </Router>
    </>
  )
}

export default Account
