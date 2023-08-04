import githubLogo from '../assets/github-logo.svg'
import Card from 'react-bootstrap/Card';


const ProjectCards = ({projects}) => {

    return (
    <div className="project-container">
        {projects.map(project => (
        <Card>
            <Card.Img src={project.image} alt='Project Image'  />
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
        ))}
        
    </div>
        );     
    }
    
    export default ProjectCards;