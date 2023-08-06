import { Form, InputGroup, Container, Button, Stack} from "react-bootstrap";
import { useState } from 'react';
import { validateEmail} from "../../../src/components/utils/helpers";


export default function ContactPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

// ---------------------------------------------

  const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'email') {
          setEmail(inputValue);
        } else {
          setMessage(inputValue);
        }
      };

// ---------------------------------------------

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

// ---------------------------------------------

  return (
    <Container fluid className="py-4 px-5" id="contactform">
      <div className="mt-3 pb-3">
        <h2>Contact</h2>
      </div>
      <div>
        <Form.Label id='form-label'>Name:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Name"
            aria-label="Name"
            name="name"
            id="form-control"
            aria-describedby="basic-addon2"
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
        </InputGroup>
        <Form.Label id='form-label'>Email:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="example@email.com"
            aria-label="Email"
            name="email"
            id="form-control"
            aria-describedby="basic-addon2"
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
        </InputGroup>
        <Form.Label id='form-label'>Message:</Form.Label>
        <InputGroup className="mb-3" style={{height:'30vh'}}>
          <Form.Control
            placeholder="What's your message?"
            as="textarea"
            name="message"
            id="form-control"
            aria-label="Message"
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
        </InputGroup>
        <Stack direction="horizontal">
          <Button
            style={{backgroundColor: '#001f2d', color: '#e5f5fc'}}
            onClick={() => setErrorMessage(`Currently Unavailable : Please email me at abilivick@gmail.com`)}>
            Submit
          </Button >
          <p className="mx-3 my-2">
            {errorMessage}
          </p>
        </Stack>
        
      </div>
    </Container>
  );
}
