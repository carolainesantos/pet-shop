import { Card, Button } from "react-bootstrap";

export default function Inicial() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ margin: "0" }}>Melodify</h1>
        <p
          style={{
            fontSize: "18px",
            fontFamily: "Roboto",
          }}
        >
          Descubra sua próxima música favorita💎.
        </p>
        <br />
        <p
          style={{
            fontSize: "22px",
            fontFamily: "Roboto",
            color: "purple",
          }}
        >
          Bem-vindo ao Melodify, o seu destino definitivo para uma experiência
          musical sem fronteiras! Descubra um mundo repleto de sons envolventes,
          playlists personalizadas e uma biblioteca vasta que abrange todos os
          gostos musicais. Com várias faixas à sua disposição, estamos aqui para
          acompanhar todos os momentos da sua vida com a trilha sonora perfeita.
        </p>
      </header>
      <main style={{ textAlign: "center" }}>
        <section
          style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
        >
          <br />
          <h2>Sugestão </h2>
          <Card style={{ width: "18rem", margin: "0 auto" }}>
            <Card.Img
              variant="top"
              src="taylorSwift.jpeg"
              alt="Capa da música"
            />
            <Card.Body>
              <Card.Title>The Man</Card.Title>
              <Card.Text>
                <p>Taylor Swift</p>
                <p>Album: Lover</p>
              </Card.Text>
              <Button variant="dark">Reproduzir</Button>
            </Card.Body>
          </Card>
        </section>
      </main>
    </div>
  );
}