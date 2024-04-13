import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      expand={"lg"}
      style={{
        backgroundColor: "#FAF1E5",
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        style={{
          padding: "0px 50px",
          fontSize: "24px",
          color: "#739766",
        }}
      >
        <img src="./img/logo.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="minhanav" />
      <Navbar.Collapse
        id="minhanav"
        style={{
          textAlign: "center",
          alignSelf: "stretch",
          color: "#130F4D",
          fontSize: "30px",
        }}
      >
        <Container
          style={{
            marginRight: "400px",
          }}
        >
          <Navbar.Text
            as={Link}
            to="/sobre"
            style={{
              fontFamily: "Roboto",
              fontSize: "21px",
              textDecoration: "none",
              color: "#C9940B",
              fontWeight: 900,
            }}
          >
            Sobre
          </Navbar.Text>
          <Navbar.Text
            as={Link}
            to="/contato"
            style={{
              fontSize: "21px",
              textDecoration: "none",
              marginLeft: "20px",
              fontFamily: "Roboto",
              color: "#C9940B",
              fontWeight: 900,
            }}
          >
            Contato
          </Navbar.Text>
          <Navbar.Text
            as={Link}
            to="/produto"
            style={{
              fontSize: "21px",
              textDecoration: "none",
              marginLeft: "20px",
              fontFamily: "Roboto",
              color: "#C9940B",
              fontWeight: 900,
            }}
          >
            Produtos
          </Navbar.Text>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}
