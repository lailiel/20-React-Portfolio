import { Form, InputGroup, Container} from "react-bootstrap";

import { useState } from 'react';

import { validateEmail} from "../components/utils/helpers";


export default function ContactPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'email') {
          setEmail(inputValue);
        } else {
          setMessage(inputValue);
        }
      };

      const handleBlur = (e) => {

        const { target } = e;
        const inputType = target.name;

        if (inputType === 'name') {
          if(name == '') {
            setErrorMessage('Please enter a name');
          }
        } else if (inputType === 'email') {
          if(!validateEmail(email) || email == ''){
            setErrorMessage('Please enter a valid email')
          }
        } else {
          if(message == '') {
            setErrorMessage('Please enter a message');
          }
        }

      }

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
            name="name"
            aria-describedby="basic-addon2"
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
        </InputGroup>
        <Form.Label>Email:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="example@email.com"
            aria-label="Email"
            name="email"
            aria-describedby="basic-addon2"
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
        </InputGroup>
        <Form.Label>Message:</Form.Label>
        <InputGroup className="mb-3" style={{height:'30vh'}}>
          <Form.Control
            placeholder="What's your message?"
            as="textarea"
            name="message"
            aria-label="Message"
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
        </InputGroup>
        <p>
          {errorMessage}
        </p>
      </div>
    </Container>
  );
}
