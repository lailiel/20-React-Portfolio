import { useState } from 'react'
import ProjectCards from '../components/ProjectCards'
import Container from 'react-bootstrap/Container'
// import justtask from '.../assets/projectimages/JustTask.jpg'


export default function PortfolioPage()  {
    const [projects, setProjects] = useState ([
        { id: 1, name: 'JustTask', skillsUsed: 'MERN', gitLink: 'https://github.com/lailiel/JustTask', link: 'https://justtask-c9b4d9a95280.herokuapp.com/', image: '/assets/projectimages/JustTask.jpg'},

        { id: 2, name: 'Text Editor', skillsUsed: 'PWA', gitLink: 'https://github.com/lailiel/19-Text-Editor', link: 'https://text-editor-4899-3683dab7fc56.herokuapp.com/', image: '/assets/projectimages/TextEditor.jpg'},
        { id: 3, name: 'Social Network API', skillsUsed: 'noSQL', gitLink: 'https://github.com/lailiel/18-Social-Network-Api', link: 'https://github.com/lailiel/18-Social-Network-Api', image: '/assets/projectimages/SocialNetworkApi.jpg'},

        // { id: 4, name: 'Rock Paper Showdown', skillsUsed: '---', gitLink: 'https://github.com/JohnnyQ40/RockPaperShowdown', link: 'https://rock-paper-showdown-ed328492c032.herokuapp.com/', image: '/assets/projectimages/RockPaperShowdown.jpg'},

        { id: 5, name: 'Tech Blog', skillsUsed: 'MCV', gitLink: 'https://github.com/lailiel/14-MVC-Tech-Blog', link: 'https://techblog7395-7f4f7ae01458.herokuapp.com/', image: '/assets/projectimages/TechBlog.jpg'},
        { id: 6, name: 'E-Commerce Back End', skillsUsed: 'ORM', gitLink: 'https://github.com/lailiel/13-E-Commerce-Back-End', link: 'https://github.com/lailiel/13-E-Commerce-Back-End', image: '/assets/projectimages/EcommerceBackend.jpg'},
        { id: 7, name: 'Employee Tracker', skillsUsed: 'SQL', gitLink: 'https://github.com/lailiel/12-Employee-Tracker', link: 'https://github.com/lailiel/12-Employee-Tracker', image: '/assets/projectimages/EmployeeTracker.jpg'},
        { id: 8, name: 'Note Taker', skillsUsed: 'Express', gitLink: 'https://github.com/lailiel/11-Note-Taker', link: 'https://note-taker6876.herokuapp.com/', image: '/assets/projectimages/NoteTaker.jpg'}, 
        { id: 9, name: 'Logo Generator', skillsUsed: 'OOP', gitLink: 'https://github.com/lailiel/10-Logo-Generator', link: 'https://github.com/lailiel/10-Logo-Generator', image: '/assets/projectimages/LogoGenerator.jpg'},
        { id: 10, name: 'Read-me Generator', skillsUsed: 'NodeJS', gitLink: 'https://github.com/lailiel/09-ReadMe-Generator', link: 'https://github.com/lailiel/09-ReadMe-Generator', image: '/assets/projectimages/ReadmeGenerator.jpg'},

        { id: 11, name: 'Fitness Forecast', skillsUsed: 'Front-End', gitLink: 'https://github.com/boydstacken/fitness-forecast', link: 'https://boydstacken.github.io/fitness-forecast/', image: '/assets/projectimages/FitnessForecast.jpg'},

        { id: 12, name: 'Weather Dashboard', skillsUsed: 'Server Side APIs', gitLink: 'https://github.com/lailiel/06-Weather-Dashboard', link: 'https://lailiel.github.io/06-Weather-Dashboard/', image: '/assets/projectimages/WeatherDashboard.jpg'},
        { id: 13, name: 'Workday Scheduler', skillsUsed: '3rd Party APIs', gitLink: 'https://github.com/lailiel/05-Work-Day-Scheduler', link: 'https://lailiel.github.io/05-Work-Day-Scheduler/', image: '/assets/projectimages/WorkdayScheduler.jpg'},
        { id: 14, name: 'Coding Quiz', skillsUsed: 'Web APIs', gitLink: 'https://github.com/lailiel/04-Coding-Quiz', link: 'https://lailiel.github.io/04-Coding-Quiz/', image: '/assets/projectimages/CodingQuiz.jpg'},
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



