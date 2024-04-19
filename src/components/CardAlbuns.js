import { Card, Button } from "react-bootstrap";

export default function CardAlbuns({ key, nome, descricao, preco, imagem }) {
  return (
    <Card
      style={{
        width: "22rem",
        margin: "10px",
        border: "1px solid #b1b1b1",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Img
        variant="top"
        src={imagem}
        alt="Foto do Produto"
        style={{
          maxHeight: "300px",
        }}
      />
      <Card.Body>
        <Card.Title style={{
          fontFamily: "cursive",
          fontWeight: "bold"
        }}>{nome}</Card.Title>
        <Card.Text>
          <p>
            {" "}
            <br />
            {descricao}
          </p>
          <p style={{
            fontFamily: "monospace",
            fontWeight: "bold"
          }}>Preço: {preco}</p>
        </Card.Text>
        <div style={{ textAlign: "center" }}>
          <Button style={{
            backgroundColor: "#C9940B",
            border: "none",
            borderRadius: "15px",
            color: "#ffff",
            fontWeight: "600",
            fontFamily: "monospace",
            fontSize: "17px",
            width: "105px"
          }}>Comprar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
