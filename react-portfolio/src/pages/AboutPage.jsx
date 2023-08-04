import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutPage() {
    return (
       <Container fluid className='p-5' id='aboutme'>
            <Col className='justify-content-center'>
                <Row className='mb-3'>
                   <h2>Hello!</h2>
                </Row>
                <Row className='my-3'>
                   <p>l Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                    tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
                    impedit suscipit sed magnam alias in, repellat expedita hic explicabo
                    architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Velit voluptate exercitationem quaerat pariatur
                    mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
                    nostrum temporibus ad omnis nam rerum eligendi.</p>
                </Row>
            </Col>
        </Container>
    )
}