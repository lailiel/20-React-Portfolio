import Container from "react-bootstrap/Container";
import portrait from '../assets/Headshot.jpg'

export default function AboutPage() {
  return (
    <Container fluid className="p-5" id="homepage">
      <div className="">
        <h2>Welcome!</h2>
      </div>
      <div id="clip">
         <img src={portrait} style={{height: '35vh'}} className="my-5" id="portrait"/>
      </div>
      <div id='home-text'>
        <p>My name is <b>Abigail Livick</b></p>
        <p>I go by <b>Abi</b></p>
        <p>I am a <b>full stack</b> web developer with a <b>design</b> background</p>
      </div>
    </Container>
  );
}