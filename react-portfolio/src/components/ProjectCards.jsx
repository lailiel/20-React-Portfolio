import githubLogo from '../assets/github-mark.png'

const ProjectCards = ({projects}) => {

    return (
    <div className="project-container">
        {projects.map(project => (
        <div className='project-card' >
            <img src={project.image} alt="project image" className="project-image" />
            {/* href={project.link} */}
            <h4>{project.name}</h4>
            <a href={project.gitLink}>
                <img className="logo" src={githubLogo} atl="Github Logo"/>
            </a>
                <div>
                    <p>{project.skillsUsed}</p>
                </div>
        </div>
        ))}
        
    </div>
        );     
    }
        
    
    export default ProjectCards;