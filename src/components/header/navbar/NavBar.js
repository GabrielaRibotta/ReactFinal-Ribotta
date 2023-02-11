import { Link } from 'react-router-dom';

// Styles
import './NavBar.css'

//Components
import CartWidget from './cartWidget/CartWidget.js'

// Components Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

    return (
        <nav>
            <Navbar variant="light" expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="/home" className="brandLogo"><i className="fa-solid fa-book"></i> Byblos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Inicio</Nav.Link>
                        <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            <Link to="/category/ficcion"><p>Ficción</p></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            <Link to="/category/academicos" ><p>Académicos</p></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            <Link to="/category/infantiles" ><p>Infantiles</p></Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            <Link to="/productos"><p>Ver Todos</p></Link>
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CartWidget />
        </nav>
    );
}

export default NavBar;