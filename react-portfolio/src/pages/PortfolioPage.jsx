import { useState } from 'react'
import ProjectCards from '../components/ProjectCards'

const PortfolioPage = () => {
    const [projects, setProjects] = useState ([
        { name: 'Text Editor', skillsUsed: 'PWA', gitLink: 'https://github.com/lailiel/19-Text-Editor'},
        { name: 'Social Network API', skillsUsed: 'noSQL', gitLink: 'https://github.com/lailiel/18-Social-Network-Api'},

        { name: 'Rock Paper Showdown', skillsUsed: 'Front-End', gitLink: 'https://github.com/JohnnyQ40/RockPaperShowdown'},

        { name: 'Tech Blog', skillsUsed: 'MCV', gitLink: 'https://github.com/lailiel/14-MVC-Tech-Blog'},
        { name: 'E-Commerce Back End', skillsUsed: 'ORM', gitLink: 'https://github.com/lailiel/13-E-Commerce-Back-End'},
        { name: 'Employee Tracker', skillsUsed: 'SQL', gitLink: 'https://github.com/lailiel/12-Employee-Tracker'},
        { name: 'Note Taker', skillsUsed: 'Express', gitLink: 'https://github.com/lailiel/11-Note-Taker'}, 
        { name: 'Logo Generator', skillsUsed: 'OOP', gitLink: 'https://github.com/lailiel/10-Logo-Generator'},
        { name: 'Read-me Generator', skillsUsed: 'NodeJS', gitLink: 'https://github.com/lailiel/09-ReadMe-Generator'},

        { name: 'Forcast Fitness', skillsUsed: 'Front-End', gitLink: 'https://github.com/boydstacken/fitness-forecast'},

        { name: 'Weather Dashboard', skillsUsed: 'Server Side APIs', gitLink: 'https://github.com/lailiel/06-Weather-Dashboard'},
        { name: 'Workday Scheduler', skillsUsed: '3rd Party APIs', gitLink: 'https://github.com/lailiel/05-Work-Day-Scheduler'},
        { name: 'Coding Quiz', skillsUsed: 'Web APIs', gitLink: 'https://github.com/lailiel/04-Coding-Quiz'},
    ])

    return (
        <div className="project-content">
            <h2>Projects: </h2>
            <ProjectCards projects={projects}/>
        </div>
    )
}

export default PortfolioPage