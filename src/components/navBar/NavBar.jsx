import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import "./navBar.css"
function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className='nav-bar-link' to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/works">Works</Link>
                    <Link to="/contacts">Contacts</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export {NavBar}