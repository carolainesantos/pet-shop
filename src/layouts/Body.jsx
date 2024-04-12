import CardAlbuns from "../components/CardAlbuns";
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
        <h1>Titulo aqui</h1>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Roboto",
          }}
        >
          Os melhores produtos voçê encontra aqui ✨
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
            responsavel={album.responsavel}
            raça={album.raça}
            imagem={album.imagem}
          />
        ))}
      </div>
    </div>
  );
}
