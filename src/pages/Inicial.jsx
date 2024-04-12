import { Card, Button } from "react-bootstrap";

export default function Inicial() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ margin: "0" }}>Pet Amigo</h1>
        <p
          style={{
            fontSize: "18px",
            fontFamily: "Roboto",
          }}
        >
          Pet Amigo: onde o amor pelos animais é a nossa maior inspiração 🐾
        </p>
        <br />
        <p
          style={{
            fontSize: "22px",
            fontFamily: "Roboto",
            color: "purple",
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
