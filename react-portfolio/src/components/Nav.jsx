import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

export default function CustomNavbar() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" expand="sm" className='sticky-top'>
      <Container>
        <Navbar.Brand href="/">Abigail Livick</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Link className="nav-link" to="/">ABOUT ME</Link>
            <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
            <Link className="nav-link" to="/contact">CONTACT</Link>
            <Link className="nav-link" to="/resume">RESUME</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
