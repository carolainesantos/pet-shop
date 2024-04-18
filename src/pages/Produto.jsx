import CardAlbuns from "../components/CardAlbuns";
import jsonData from "../mocks/info.json";
import React, { useEffect, useState } from "react";

export default function Produto() {
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    setAlbuns(jsonData);
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0px",
      }}
    >
      <div>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            color: "#C6A969",
            fontWeight: "600",
          }}
        >
          Nossos Produtos
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "monospace",
            color: "#A79277",
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
            descricao={album.descricao}
            preco={album.preco}
            imagem={album.imagem}
          />
        ))}
      </div>
    </div>
  );
}
