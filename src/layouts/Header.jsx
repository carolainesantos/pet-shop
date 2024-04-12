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
          Sejam Bem vindos a Paxos Pet Shop! 🐾
        </p>
        <br />
        <p
          style={{
            fontSize: "22px",
            fontFamily: "Roboto",
            color: "purple",
          }}
        >
          "Bem-vindo à Paxos Vet Clinic! Imagine um lugar onde o amor pelos
          animais se entrelaça com a mais avançada expertise médica. Na Paxos
          Vet Clinic, nossa história é escrita todos os dias pelos sorrisos que
          trazemos aos nossos pacientes de quatro patas e suas famílias humanas.
          Desde cuidados preventivos até tratamentos especializados, estamos
          aqui para oferecer o mais alto padrão de atendimento veterinário. Com
          uma equipe dedicada e apaixonada, cada animal que passa por nossas
          portas recebe o carinho e a atenção que merece. Junte-se a nós nesta
          jornada onde o bem-estar animal é a nossa prioridade número um. Na
          Paxos Vet Clinic, cada miau, latido e rabinho abanando conta uma
          história de amor e cuidado. Venha fazer parte da nossa família!"
        </p>
      </header>
      <main style={{ textAlign: "center" }}>
        <section
          style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
        >
          <br />
          <h2>teste </h2>
          <Card style={{ width: "18rem", margin: "0 auto" }}>
            <Card.Img
              variant="top"
              src="imagem aqui"
              alt="Descrição da imagem"
            />
            <Card.Body>
              <Card.Title>Aqui temos um card</Card.Title>
              <Card.Text>
                <p>Paragrafo</p>
                <p>Paragrafo</p>
              </Card.Text>
              <Button variant="dark">botao</Button>
            </Card.Body>
          </Card>
        </section>
      </main>
    </div>
  );
}
