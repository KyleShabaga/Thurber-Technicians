import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Row, Col, Form } from "react-bootstrap"
import './index.css'

export default connectSearchBox(({ refine, ...rest }) => (
  <Row className="justify-content-center search-main" style={{backgroundColor:"#f7f9fa"}}>
    <Col className='search-col'>
      <Form className="p-3 m-5">
        <Form.Group as={Row} controlId="formSearch">
          <Form.Label style={{ color: "#192532bd" }}>
            What are you looking for?
          </Form.Label>
          <Form.Control
            
            className="input-size mt-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={e => refine(e.target.value)}
            {...rest}
          />
        </Form.Group>
      </Form>
    </Col>
  </Row>
))
