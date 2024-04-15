import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container
      style={{
        backgroundColor: "#FAF1E5",
      }}
    >
      <Row>
        <Col
          lg={6}
          style={{
            margin: "0 90px",
            padding: "20px 0px",
          }}
        >
          <div>
            <h4>Venha nos visitar!</h4>
            <p>
              Av São Pedro, 1331
              <br />
              São Paulo
            </p>
          </div>
        </Col>
        <Col
          lg={4}
          style={{
            margin: "0px",
            padding: "20px ",
          }}
        >
          <div>
            <h4>Redes sociais</h4>
            <a
              style={{
                textDecoration: "none",
                color: "#90D26D",
              }}
            >
              Facebook
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
              }}
            >
              Instagram
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
