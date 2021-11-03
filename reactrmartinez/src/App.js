
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

CartWidget()


function App() {
  return (
      <div className="App"  onClick=''>
        <Navbar bg="dark" variant="dark">
        <CartWidget />
          <Container>
          <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Productos seleccionados</Nav.Link>
          <Nav.Link href="#pricing">Catalogo</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <ItemListContainer greeting='Catalogo de productos' />
        <br/>
        <ItemCount />
      </div>
      
  );

}

export default App;
