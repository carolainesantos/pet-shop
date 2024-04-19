export default function Sobre() {
  return (
    <>
      <div style={{
        marginRight: "150px",
        marginLeft: "150px",
        marginBottom: "0px",
        padding: "0px"
      }}>
        <h2 style={{
          fontFamily: "cursive",
          textAlign: "center",
          fontWeight: "bolder",
          fontSize: "40px",
          marginTop: "0px",
          color: "#9B6543",
          marginBottom: "40px"
        }}>Sobre Nós </h2>
        <p style={{
          textAlign: "justify",
          fontFamily: "monospace",
          fontSize: "17px",
          marginBottom: "15px"
        }}>
          No Pet Amigo, somos apaixonados por proporcionar uma vida feliz e
          saudável para os nossos amigos de quatro patas. Fundado com o amor
          pelos animais no coração, nosso pet shop se esforça para oferecer uma
          experiência única e personalizada para você e seu animal de estimação.
        </p>
        <p style={{
          textAlign: "justify",
          fontFamily: "monospace",
          fontSize: "17px"
        }}>
          Nossa missão é criar um ambiente onde os animais e seus tutores se
          sintam em casa. Desde cães e gatos a pássaros e pequenos roedores,
          nossa equipe dedicada está aqui para ajudar a atender às necessidades
          de todos os tipos de animais de estimação.
        </p>
        <p style={{
          textAlign: "justify",
          fontFamily: "monospace",
          fontSize: "17px",
          marginBottom: "20px"
        }}>
          No Pet Amigo, a qualidade é nossa prioridade. Selecionamos
          cuidadosamente os melhores produtos, desde alimentos nutritivos até
          brinquedos divertidos e acessórios elegantes, para garantir que seu
          companheiro peludo receba apenas o melhor.
        </p>
      </div>
      import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
    </>
  );
}
