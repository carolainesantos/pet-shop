import { useState } from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./CarrousselInicial.css";

function CarrosselInicial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item
        style={{
          backgroundImage:
            "url('https://img.freepik.com/fotos-gratis/adoravel-cachorro-basenji-marrom-e-branco-sorrindo-e-dando-mais-uns-cinco-isolado-no-branco_346278-1657.jpg?random=1')",
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          <h3 style={{
            color: "#000",
            fontWeight: "700px"
          }}>Este é Bob</h3>
          <p style={{
            color: "#000"
          }}>Idade: 5 anos</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        style={{
          backgroundImage:
            "url('https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg?random=1')",
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          <h3 style={{
            color: "#000",
            fontWeight: "700px"
          }}>Este é Bob</h3>
          <p style={{
            color: "#000"
          }}>Idade: 6 anos</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        style={{
          backgroundImage:
            "url('https://chefbob.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg.webp?random=1')",
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          <h3 style={{
            fontWeight: "700px",
            color: "#000"
          }}>Esta é Luna</h3>
          <p style={{
            color: "#000"
          }}>Idade: 8 anos</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        style={{
          backgroundImage:
            "url('https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg?random=1')",
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          <h3 style={{
            fontWeight: "700px",
            color: "#000"
          }}>Esta é Cecilia</h3>
          <p style={{
            color: "#000"
          }}>Idade: 7 anos</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrosselInicial;
