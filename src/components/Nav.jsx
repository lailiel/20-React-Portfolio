import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import name from '../assets/Name-Color-Linear.svg'
import logo from '../assets/Logo-Color.svg'


export default function CustomNavbar() {
  return (
    <>
    <Navbar data-bs-theme="dark" expand="md" style={{height: '90px'}}className='sticky-top' id="navbar">
      <Container fluid className='p-0 m-0'>
        <Navbar.Brand href="/" id='nav-name' className='p-3'>
          <img id="nav-default" src={name} style={{height: '35px'}}/>
          <img id="nav-logo" src={logo} style={{height: '35px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav id='nav-list'>
            <Link className="nav-link" to="/aboutme">ABOUT ME</Link>
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
