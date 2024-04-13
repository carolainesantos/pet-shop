import CardAlbuns from "../components/CardAlbum";
import jsonData from "../mocks/info.json";
import React, { useEffect, useState } from "react";

export default function Album() {
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    setAlbuns(jsonData);
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div>
        <h1>Nossos Produtos</h1>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Roboto",
          }}
        >
          Explore nossos produtos e faça cada momento juntos especiais 🐾
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {albuns.map((album) => (
          <CardAlbuns
            key={album.id}
            nome={album.nome}
            artista={album.artista}
            album={album.album}
            imagem={album.imagem}
          />
        ))}
      </div>
    </div>
  );
}
