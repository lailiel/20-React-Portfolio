import githubLogo from '../assets/github-mark.png'
import linkedinLogo from '../assets/LI-In-Bug.png'

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div className="footer">
       <a href="https://github.com/lailiel">
        <img src={githubLogo} atl="Github Logo"/>
       </a>
       <a href="https://www.linkedin.com/in/abilivick/">
        <img src={linkedinLogo} atl="Linked In Logo"/>
       </a>
    </div>

  );
}
