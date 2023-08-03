import { useState } from 'react'
import ProjectCards from '../components/ProjectCards'

const PortfolioPage = () => {
    const [projects, setProjects] = useState ([
        { name: 'Text Editor', skillsUsed: 'PWA', gitLink: 'https://github.com/lailiel/19-Text-Editor', link: 'https://tech-blog-4899-b706d3d7cc33.herokuapp.com/', image: './src/assets/projectimages/TextEditor.jpg'},
        { name: 'Social Network API', skillsUsed: 'noSQL', gitLink: 'https://github.com/lailiel/18-Social-Network-Api', link: '', image: './src/assets/projectimages/SocialNetworkApi.jpg'},

        { name: 'Rock Paper Showdown', skillsUsed: '---', gitLink: 'https://github.com/JohnnyQ40/RockPaperShowdown', link: 'https://rock-paper-showdown-ed328492c032.herokuapp.com/', image: './src/assets/projectimages/RockPaperShowdown.jpg'},

        { name: 'Tech Blog', skillsUsed: 'MCV', gitLink: 'https://github.com/lailiel/14-MVC-Tech-Blog', link: 'https://techblog7395-7f4f7ae01458.herokuapp.com/', image: './src/assets/projectimages/TechBlog.jpg'},
        { name: 'E-Commerce Back End', skillsUsed: 'ORM', gitLink: 'https://github.com/lailiel/13-E-Commerce-Back-End', link: '', image: './src/assets/projectimages/EcommerceBackend.jpg'},
        { name: 'Employee Tracker', skillsUsed: 'SQL', gitLink: 'https://github.com/lailiel/12-Employee-Tracker', link: '', image: './src/assets/projectimages/EmployeeTracker.jpg'},
        { name: 'Note Taker', skillsUsed: 'Express', gitLink: 'https://github.com/lailiel/11-Note-Taker', link: 'https://note-taker6876.herokuapp.com/', image: './src/assets/projectimages/NoteTaker.jpg'}, 
        { name: 'Logo Generator', skillsUsed: 'OOP', gitLink: 'https://github.com/lailiel/10-Logo-Generator', link: '', image: './src/assets/projectimages/LogoGenerator.jpg'},
        { name: 'Read-me Generator', skillsUsed: 'NodeJS', gitLink: 'https://github.com/lailiel/09-ReadMe-Generator', link: '', image: './src/assets/projectimages/ReadmeGenerator.jpg'},

        { name: 'Forcast Fitness', skillsUsed: 'Front-End', gitLink: 'https://github.com/boydstacken/fitness-forecast', link: 'https://boydstacken.github.io/fitness-forecast/', image: './src/assets/projectimages/FitnessForecast.jpg'},

        { name: 'Weather Dashboard', skillsUsed: 'Server Side APIs', gitLink: 'https://github.com/lailiel/06-Weather-Dashboard', link: 'https://lailiel.github.io/06-Weather-Dashboard/', image: './src/assets/projectimages/WeatherDashboard.jpg'},
        { name: 'Workday Scheduler', skillsUsed: '3rd Party APIs', gitLink: 'https://github.com/lailiel/05-Work-Day-Scheduler', link: 'https://lailiel.github.io/05-Work-Day-Scheduler/', image: './src/assets/projectimages/WorkdayScheduler.jpg'},
        { name: 'Coding Quiz', skillsUsed: 'Web APIs', gitLink: 'https://github.com/lailiel/04-Coding-Quiz', link: 'https://lailiel.github.io/04-Coding-Quiz/', image: './src/assets/projectimages/CodingQuiz.jpg'},
    ])

    return (
        <div className="project-content">
            <h2>Projects: </h2>
            <ProjectCards projects={projects}/>
        </div>
    )
}

export default PortfolioPage