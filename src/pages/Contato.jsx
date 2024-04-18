import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contato() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <section
              style={{
                padding: "20px",
                margin: "20px auto",
                maxWidth: "550px",
                backgroundColor: "#F6F5F5",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h1>Fale com a gente 😉</h1>
              <p>
                Entre em contato conosco <br />
                08:00 a.m ás 17:00 p.m
              </p>

              <p>📞(55) 47 99999-9999</p>
              <p>✉️ petamigo@gmail.com</p>
            </section>
          </Col>
          <Col md={6}>
            <BasicExample />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function BasicExample() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
