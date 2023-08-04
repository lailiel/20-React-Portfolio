import githubLogo from '../assets/github-logo.svg'
import linkedinLogo from '../assets/linkedin-tile.svg'
import Container from 'react-bootstrap/Container'

export default function FooterComponent() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <footer className='bg-light text-center text-white footer'>
      <Container classsName='mb-2 '>
          <a href='https://github.com/lailiel'>
           <img id='icon' src={githubLogo} className='m-4'style={{width:'30px', height:'30px'}} ></img>
          </a>
          <a href='https://www.linkedin.com/in/abilivick/'>
          <img id='icon' src={linkedinLogo} className='m-4'style={{width:'30px', height:'30px'}} ></img>
          </a>
      </Container>
    </footer>

  );
}
