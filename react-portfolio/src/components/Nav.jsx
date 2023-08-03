import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

export default function CustomNavbar() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Abigail Livick</Navbar.Brand>
        <Nav className="justify-content-end">
          <Link className="nav-link" to="/">ABOUT ME</Link>
          <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
          <Link className="nav-link" to="/contact">CONTACT</Link>
          <Link className="nav-link" to="/resume">RESUME</Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}



// export default function Nav() {
//   // The Navbar UI component will render each of the Link elements in the links prop
//   return (
  
//     <Navbar
//       links={[
//         <Link key={1} className="nav-link" to="/">
//           ABOUT ME
//         </Link>,
//         <Link key={2} className="nav-link" to="/portfolio">
//           PORTFOLIO
//         </Link>,
//         <Link key={2} className="nav-link" to="/contact">
//           CONTACT
//         </Link>,
//         <Link key={2} className="nav-link" to="/resume">
//           RESUME
//         </Link>,
//       ]}
//     />

//   );
// }
