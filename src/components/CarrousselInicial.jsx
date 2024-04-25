import { useState } from "react";
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
          <h3
            style={{
              color: "#2E0020",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Este é Bob
          </h3>
          <p
            style={{
              color: "#2E0020",
              fontSize: "18px",
            }}
          >
            Idade: 5 anos
          </p>
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
          <h3
            style={{
              color: "#2E0020",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Esta é Luna
          </h3>
          <p
            style={{
              color: "#2E0020",
              fontSize: "18px",
            }}
          >
            Idade: 8 anos
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        style={{
          backgroundImage:
            "url('https://eccha.org/wp-content/webp-express/webp-images/uploads/2023/06/dog-1-1024x682.png.webp?random=1')",
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          <h3
            style={{
              color: "#2E0020",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Este é Chade
          </h3>
          <p
            style={{
              color: "#2E0020",
              fontSize: "18px",
            }}
          >
            Idade: 6 anos
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        style={{
          backgroundImage:
            "url('https://img.nsctotal.com.br/wp-content/uploads/2022/01/gato-siames-944x531.jpg?random=1')",
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          <h3
            style={{
              color: "#2E0020",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Esta é Cecilia
          </h3>
          <p
            style={{
              color: "#2E0020",
              fontSize: "18px",
            }}
          >
            Idade: 7 anos
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrosselInicial;
