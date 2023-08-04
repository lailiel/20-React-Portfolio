import githubLogo from '../assets/github-logo.svg'
import { Card, Col, Row, Ratio } from 'react-bootstrap';




const ProjectCards = ({projects}) => {

    return (
    <Row xs={1} sm={2} md={2} lg={3} className="g-5">
        {projects.map(project => (
        <Col key={project.id}>
        <Card style={{height:'100%', aspectRatio: "3x2"}}>
       
            <Card.Img style={{height:'100%', objectFit: 'cover'}} src={project.image} alt='Project Image'  />
            <Card.ImgOverlay>
                <Card.Title>
                    <a href={project.link}>
                        {project.name}
                    </a>
                </Card.Title>
                <Card.Text>
                    {project.skillsUsed}
                </Card.Text>
                <a href={project.gitLink}>
                    <Card.Img  
                        style={{width:'30px', height:'30px'}} 
                        src={githubLogo} atl="Github Logo">
                    </Card.Img>
                </a>
            </Card.ImgOverlay>
   
        </Card>
        </Col>
        ))}
        
    </Row>
        );     
    }
    
    export default ProjectCards;