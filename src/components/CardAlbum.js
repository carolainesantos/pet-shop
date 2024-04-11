import { Card, Button } from "react-bootstrap";

export default function CardAlbuns({
  key,
  nome,
  imagem,
  artista,
  album,
  descricao,
}) {
  return (
    <Card style={{ width: "22rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={imagem}
        alt="Capa da música"
        style={{
          maxHeight: "300px",
        }}
      />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          <p>{artista}</p>
          <p>Album: {album}</p>
          {descricao}
        </Card.Text>
        <div style={{ textAlign: "center" }}>
          <Button variant="dark">Reproduzir</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
