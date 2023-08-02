import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
  
    <Navbar
      links={[
        <Link key={1} className="nav-link" to="/">
          ABOUT ME
        </Link>,
        <Link key={2} className="nav-link" to="/portfolio">
          PORTFOLIO
        </Link>,
        <Link key={2} className="nav-link" to="/contact">
          CONTACT
        </Link>,
        <Link key={2} className="nav-link" to="/resume">
          RESUME
        </Link>,
      ]}
    />

  );
}
