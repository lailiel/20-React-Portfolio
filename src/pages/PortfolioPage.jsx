import { useState } from 'react'
import ProjectCards from '../components/ProjectCards'
import Container from 'react-bootstrap/Container'


export default function PortfolioPage()  {
    const [projects, setProjects] = useState ([
        { id: 1, name: 'Text Editor', skillsUsed: 'PWA', gitLink: 'https://github.com/lailiel/19-Text-Editor', link: 'https://text-editor-4899-3683dab7fc56.herokuapp.com/', image: './src/assets/projectimages/TextEditor.jpg'},
        { id: 2, name: 'Social Network API', skillsUsed: 'noSQL', gitLink: 'https://github.com/lailiel/18-Social-Network-Api', link: 'https://github.com/lailiel/18-Social-Network-Api', image: './src/assets/projectimages/SocialNetworkApi.jpg'},

        { id: 3, name: 'Rock Paper Showdown', skillsUsed: '---', gitLink: 'https://github.com/JohnnyQ40/RockPaperShowdown', link: 'https://rock-paper-showdown-ed328492c032.herokuapp.com/', image: './src/assets/projectimages/RockPaperShowdown.jpg'},

        { id: 4, name: 'Tech Blog', skillsUsed: 'MCV', gitLink: 'https://github.com/lailiel/14-MVC-Tech-Blog', link: 'https://techblog7395-7f4f7ae01458.herokuapp.com/', image: './src/assets/projectimages/TechBlog.jpg'},
        { id: 5, name: 'E-Commerce Back End', skillsUsed: 'ORM', gitLink: 'https://github.com/lailiel/13-E-Commerce-Back-End', link: 'https://github.com/lailiel/13-E-Commerce-Back-End', image: './src/assets/projectimages/EcommerceBackend.jpg'},
        { id: 6, name: 'Employee Tracker', skillsUsed: 'SQL', gitLink: 'https://github.com/lailiel/12-Employee-Tracker', link: 'https://github.com/lailiel/12-Employee-Tracker', image: './src/assets/projectimages/EmployeeTracker.jpg'},
        { id: 7, name: 'Note Taker', skillsUsed: 'Express', gitLink: 'https://github.com/lailiel/11-Note-Taker', link: 'https://note-taker6876.herokuapp.com/', image: './src/assets/projectimages/NoteTaker.jpg'}, 
        { id: 8, name: 'Logo Generator', skillsUsed: 'OOP', gitLink: 'https://github.com/lailiel/10-Logo-Generator', link: 'https://github.com/lailiel/10-Logo-Generator', image: './src/assets/projectimages/LogoGenerator.jpg'},
        { id: 9, name: 'Read-me Generator', skillsUsed: 'NodeJS', gitLink: 'https://github.com/lailiel/09-ReadMe-Generator', link: 'https://github.com/lailiel/09-ReadMe-Generator', image: './src/assets/projectimages/ReadmeGenerator.jpg'},

        { id: 10, name: 'Forcast Fitness', skillsUsed: 'Front-End', gitLink: 'https://github.com/boydstacken/fitness-forecast', link: 'https://boydstacken.github.io/fitness-forecast/', image: './src/assets/projectimages/FitnessForecast.jpg'},

        { id: 11, name: 'Weather Dashboard', skillsUsed: 'Server Side APIs', gitLink: 'https://github.com/lailiel/06-Weather-Dashboard', link: 'https://lailiel.github.io/06-Weather-Dashboard/', image: './src/assets/projectimages/WeatherDashboard.jpg'},
        { id: 12, name: 'Workday Scheduler', skillsUsed: '3rd Party APIs', gitLink: 'https://github.com/lailiel/05-Work-Day-Scheduler', link: 'https://lailiel.github.io/05-Work-Day-Scheduler/', image: './src/assets/projectimages/WorkdayScheduler.jpg'},
        { id: 13, name: 'Coding Quiz', skillsUsed: 'Web APIs', gitLink: 'https://github.com/lailiel/04-Coding-Quiz', link: 'https://lailiel.github.io/04-Coding-Quiz/', image: './src/assets/projectimages/CodingQuiz.jpg'},
    ])

    return (
        <Container fluid className="p-5" id="projects">
            <div className="pb-3">
                <h2>Projects</h2>
            </div>
            <ProjectCards projects={projects}/>
        </Container>
                
      );
}



