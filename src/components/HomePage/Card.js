import React from "react"
import { Card, Col } from "react-bootstrap"
import { Link } from "gatsby"

const HomeCard = ({ title, decs, icon, refto }) => {
  return (
    <Link to={refto} style={{ textDecoration: "none" }}>
      <Col className="my-2 " sm={12} md={6} lg={3}>
        <Card
          style={{ width: "16rem", height: "210px" }}
          className="text-center "
        >
          <Card.Img
            variant="top"
            src={icon}
            style={{ width: "80px", height: "80px" }}
            className="mx-auto my-3"
          />
          <Card.Body className="m-2 p-0">
            <Card.Title className="">{title}</Card.Title>
            <Card.Subtitle className=" text-muted">{decs}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  )
}

export default HomeCard
