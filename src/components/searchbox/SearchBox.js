import React from "react"
import { Row, Col, Form } from "react-bootstrap"
import "./SearchBox.css"

const SearchBox = () => {
  return (
    <Row className="justify-content-center" style={{backgroundColor:"#f7f9fa"}}>
      <Col md="auto">
        <Form className="p-3 m-5">
          <Form.Group as={Row} controlId="formSearch">
            <Form.Label style={{color:"#192532bd"}}>What are you looking for?</Form.Label>
            <Form.Control
              size="lg"
              className=" mt-2"
              type="text"
              placeholder="Search"
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default SearchBox
