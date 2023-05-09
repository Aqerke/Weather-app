import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Contact.css";

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: "400px" }}>
        <h1 className="text-center"> Contact us </h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>
              We'll never share your email address with anyone else
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Leave your message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
