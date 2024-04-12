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
          Transforme o cotidiano do seu melhor amigo em uma experiência
          extraordinária. Descubra o mundo de cuidado e carinho no nosso Pet
          Shop!
        </p>
        <br />
        <p
          style={{
            fontSize: "22px",
            fontFamily: "Roboto",
            color: "purple",
          }}
        >
          Bem-vindo ao (Achar um Nome) 🐾
        </p>
      </header>
      <main style={{ textAlign: "center" }}>
        <section
          style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
        >
          <br />
          <h2>Sugestão </h2>
        </section>
      </main>
    </div>
  );
}
