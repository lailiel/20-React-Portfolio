import { useState } from 'react';

import { checkInput, validateEmail} from "./utils/helpers";

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // const handleInputChange = (e) => {
    //     // Getting the value and name of the input which triggered the change
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;
    
    //     // Based on the input type, we set the state of either email, username, and password
    //     if (inputType === 'name') {
    //       setEmail(inputValue);
    //     } else if (inputType === 'email') {
    //       setUserName(inputValue);
    //     } else {
    //       setPassword(inputValue);
    //     }
    //   };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        if (!message) {
          setErrorMessage(
            `Message is blank, please enter a message.`
          );
          return;
        }
        else {
            setErrorMessage(
                `Message sent.`
            )
        }
        
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');
      };

}