import React from "react"
import { Container, Row } from "react-bootstrap"
import HomeCard from "./Card"
import FaDoorOpen from "../../images/icons/door-open-solid.svg"
import FaBook from "../../images/icons/book-open-solid.svg"
import FaBookSolid from "../../images/icons/book-solid.svg"

const Home = () => {
  return (
    <Container>
      <Row className="my-5 justify-content-center text-center align-items-center ">
        <h1>The go-to place for all tech related content and references</h1>
      </Row>

      <Row className="justify-content-center">
        <HomeCard
          refto="/doc/thurber-basics/welcome-to-thurber"
          icon={FaDoorOpen}
          title="Welcome"
          decs="Learn more about Thurber"
        />
        <HomeCard
          refto="/doc"
          icon={FaBook}
          title="Documentation"
          decs="Read Thurber provided documents"
        />
        <HomeCard
          refto="doc/references"
          icon={FaBookSolid}
          title="References"
          decs="Looking for a specification? Look here!"
        />
      </Row>
    </Container>
  )
}

export default Home
