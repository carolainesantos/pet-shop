import { Card, Button } from "react-bootstrap";

export default function Inicial() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{
            margin: "0",
            fontFamily: "Gill Sans", // C9940B
            color: "#EDB31C",
            fontWeight: 700,
          }}
        >
          Pet Amigo
        </h1>
        <p
          style={{
            color: "#9E6106",
            fontSize: "18px",
            fontFamily: "Roboto",
          }}
        >
          Onde o amor pelos animais é a nossa maior inspiração 🐾
        </p>
        <br />
        <p
          style={{
            fontSize: "21px",
            fontFamily: "Roboto Mono",
            color: "#525252",
          }}
        >
          Bem-vindo ao Pet Amigo! Acreditamos que cada animal de estimação é
          mais do que apenas um companheiro, eles são membros especiais da nossa
          família. Nosso compromisso é fornecer produtos e serviços excepcionais
          que promovam o bem-estar e a felicidade dos nossos amigos peludos.
        </p>
      </header>
      <main style={{ textAlign: "center" }}>
        <section
          style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
        >
          <br />
          <h2
            style={{
              color: "#606C5D",
              // 606C5D cinza
            }}
          >
            Nossos Amigos
          </h2>
          <Card style={{ width: "18rem", margin: "90px auto" }}>
            <Card.Img variant="top" src="../img/pastor-alemao.jpg" alt="Pet" />
            <Card.Body>
              <Card.Title>Bob</Card.Title>
              <Card.Text>
                <p>Pastor Alemão</p>
                <p>8 anos</p>
              </Card.Text>
              <Button variant="warning">Conhecer</Button>
            </Card.Body>
          </Card>
        </section>
      </main>
    </div>
  );
}
