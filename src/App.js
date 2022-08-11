import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import img1 from './assets/img/img1.jpeg';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Producto from './componentes/Producto/Producto';
import Titulo from './componentes/Titulo/Titulo';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div>
      <Titulo texto="Galeria de imágenes React JS" />
      <Container>
        <Row>
          <Col lg={4}>
            <Producto nombre="Primer producto" precio="1000" descripcion="Esta es la descripción del producto 1" imagen={img1} />
          </Col>
          <Col lg={4}>
            <Producto nombre="Segundo producto" precio="2000" descripcion="Esta es la descripción del producto 2" imagen="https://www.google.cl/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
          </Col>
          <Col lg={4}>
            <Producto nombre="Tercer producto" precio="3000" descripcion="Esta es la descripción del producto 3" imagen="https://picsum.photos/700/400?random" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
