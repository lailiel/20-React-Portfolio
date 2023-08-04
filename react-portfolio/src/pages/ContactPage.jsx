// import EmailSubmit from '../components/Contact'
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export default function ContactPage() {
  return (
    <Container fluid className="py-4 px-5" id="contactform">
      <div className="mt-3">
        <h2>Contact</h2>
      </div>
      <div>
        <Form.Label>Name:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <Form.Label>Email:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="example@email.com"
            aria-label="Email"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <Form.Label>Message:</Form.Label>
        <InputGroup className="mb-3" style={{height:'6em'}}>
          <Form.Control
            placeholder="What's your message?"
            as="textarea"
            aria-label="Message"
          />
        </InputGroup>
      </div>
    </Container>
  );
}
