import { Card, Button } from "react-bootstrap";

export default function CardAlbuns({ key, nome, responsavel, raça, imagem }) {
  return (
    <Card style={{ width: "22rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={imagem}
        alt="Foto do Pet"
        style={{
          maxHeight: "300px",
        }}
      />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          <p>Responsavel: {responsavel}</p>
          <p>Raça: {raça}</p>
        </Card.Text>
        <div style={{ textAlign: "center" }}>
          <Button variant="warning">Conhecer</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
