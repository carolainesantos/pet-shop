import { Card, Button } from "react-bootstrap";

export default function CardAlbuns({ key, nome, descricao, preco, imagem }) {
  return (
    <Card style={{ width: "22rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={imagem}
        alt="Foto do Produto"
        style={{
          maxHeight: "300px",
        }}
      />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          <p>
            {" "}
            <br />
            {descricao}
          </p>
          <p>Preço: {preco}</p>
        </Card.Text>
        <div style={{ textAlign: "center" }}>
          <Button variant="warning">Comprar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
