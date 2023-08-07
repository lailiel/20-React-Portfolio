import { useState } from 'react'
import ProjectCards from '../components/ProjectCards'
import Container from 'react-bootstrap/Container'
import textEditor from '../assets/projectimages/TextEditor.jpg'
import socialNetwork from '../assets/projectimages/SocialNetworkApi.jpg'
import rockPaperShowdown from '../assets/projectimages/RockPaperShowdown.jpg'
import techBlog from '../assets/projectimages/TechBlog.jpg'
import ecommerce from '../assets/projectimages/EcommerceBackend.jpg'
import employeetracker from '../assets/projectimages/EmployeeTracker.jpg'
import noteTaker from '../assets/projectimages/NoteTaker.jpg'
import logoGenerator from '../assets/projectimages/LogoGenerator.jpg'
import readmeGenerator from '../assets/projectimages/ReadmeGenerator.jpg'
import fitnessForecast from '../assets/projectimages/FitnessForecast.jpg'
import weatherDashboard from '../assets/projectimages/WeatherDashboard.jpg'
import workdayScheduler from '../assets/projectimages/WorkdayScheduler.jpg'
import codingQuiz from '../assets/projectimages/CodingQuiz.jpg'

export default function PortfolioPage()  {
    const [projects, setProjects] = useState ([
        { id: 1, name: 'Text Editor', skillsUsed: 'PWA', gitLink: 'https://github.com/lailiel/19-Text-Editor', link: 'https://text-editor-4899-3683dab7fc56.herokuapp.com/', image: {textEditor}},
        { id: 2, name: 'Social Network API', skillsUsed: 'noSQL', gitLink: 'https://github.com/lailiel/18-Social-Network-Api', link: 'https://github.com/lailiel/18-Social-Network-Api', image: {socialNetwork}},

        { id: 3, name: 'Rock Paper Showdown', skillsUsed: '---', gitLink: 'https://github.com/JohnnyQ40/RockPaperShowdown', link: 'https://rock-paper-showdown-ed328492c032.herokuapp.com/', image: {rockPaperShowdown}},

        { id: 4, name: 'Tech Blog', skillsUsed: 'MCV', gitLink: 'https://github.com/lailiel/14-MVC-Tech-Blog', link: 'https://techblog7395-7f4f7ae01458.herokuapp.com/', image: {techBlog}},
        { id: 5, name: 'E-Commerce Back End', skillsUsed: 'ORM', gitLink: 'https://github.com/lailiel/13-E-Commerce-Back-End', link: 'https://github.com/lailiel/13-E-Commerce-Back-End', image: {ecommerce}},
        { id: 6, name: 'Employee Tracker', skillsUsed: 'SQL', gitLink: 'https://github.com/lailiel/12-Employee-Tracker', link: 'https://github.com/lailiel/12-Employee-Tracker', image: {employeetracker}},
        { id: 7, name: 'Note Taker', skillsUsed: 'Express', gitLink: 'https://github.com/lailiel/11-Note-Taker', link: 'https://note-taker6876.herokuapp.com/', image: {noteTaker}}, 
        { id: 8, name: 'Logo Generator', skillsUsed: 'OOP', gitLink: 'https://github.com/lailiel/10-Logo-Generator', link: 'https://github.com/lailiel/10-Logo-Generator', image: {logoGenerator}},
        { id: 9, name: 'Read-me Generator', skillsUsed: 'NodeJS', gitLink: 'https://github.com/lailiel/09-ReadMe-Generator', link: 'https://github.com/lailiel/09-ReadMe-Generator', image: {readmeGenerator}},

        { id: 10, name: 'Fitness Forecast', skillsUsed: 'Front-End', gitLink: 'https://github.com/boydstacken/fitness-forecast', link: 'https://boydstacken.github.io/fitness-forecast/', image: {fitnessForecast}},

        { id: 11, name: 'Weather Dashboard', skillsUsed: 'Server Side APIs', gitLink: 'https://github.com/lailiel/06-Weather-Dashboard', link: 'https://lailiel.github.io/06-Weather-Dashboard/', image: {weatherDashboard}},
        { id: 12, name: 'Workday Scheduler', skillsUsed: '3rd Party APIs', gitLink: 'https://github.com/lailiel/05-Work-Day-Scheduler', link: 'https://lailiel.github.io/05-Work-Day-Scheduler/', image: {workdayScheduler}},
        { id: 13, name: 'Coding Quiz', skillsUsed: 'Web APIs', gitLink: 'https://github.com/lailiel/04-Coding-Quiz', link: 'https://lailiel.github.io/04-Coding-Quiz/', image: {codingQuiz}},
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



