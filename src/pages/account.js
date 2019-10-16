import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"

import Document from "../components/document/index"
import SEO from "../components/seo"
import Layout from "../layouts/index"
import UnderNavDoc from "../components/Undernav/UndernavDoc"
import { Container } from "react-bootstrap"
import Search from "../components/search"

const searchIndices = [
  { name: `Posts`, title: `Documentation`, hitComp: `PostHit` },
]

// const Home = ({ user }) => {
//   return <p>Hi, {user.name ? user.name : "friend"}!</p>
// }
// const Settings = () => <p>Settings</p>
// const Billing = () => <p>Billing</p>

const Account = ({location}) => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Layout location={location}>
      <UnderNavDoc />
      <SEO title="Documentation" />
      <Search collapse indices={searchIndices} />

      <Container>
        <Document />
      </Container>
    </Layout>
    // <>
    //   <nav>
    //     <Link to="/account/">Home</Link>{" "}
    //     <Link to="/account/settings/">Settings</Link>{" "}
    //     <Link to="/account/billing/">Billing</Link>{" "}
    //     <a
    //       href="#logout"
    //       onClick={e => {
    //         logout()
    //         e.preventDefault()
    //       }}
    //     >
    //       Log Out
    //     </a>
    //   </nav>
    //   <Router>
    //     <Home path="/account/" user={user} />
    //     <Settings path="/account/settings" />
    //     <Billing path="/account/billing" />
    //   </Router>
    // </>
  )
}

export default Account