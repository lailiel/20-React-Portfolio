// import EmailSubmit from '../components/Contact'
import Container from 'react-bootstrap/Container';

export default function ContactPage() {
    return (
        <Container fluid>
            <h2>Contact</h2>
            <h3>Name:</h3>
                <input type="text" className="name" />
            <h3>Email:</h3>
                <input type="text" className="email" />
            <h3>Message:</h3>
                <textarea rows="10" className="message"></textarea>
                <p className="contact-response"></p>
                <button className="submit">Submit</button>
             
        </Container>
    )
}