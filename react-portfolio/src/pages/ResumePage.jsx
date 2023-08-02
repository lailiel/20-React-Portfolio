import { useState } from 'react'
import SkillList from '../components/SkillList'
import resume from "../assets/AbigailLivick.pdf"

const ResumePage = () => {
    const [skills, setSkills] = useState ([
        { name: 'HTML', type: 'Front-End', proficiency: '5/10'},
        { name: 'CSS', type: 'Front-End', proficiency: '5/10'},
        { name: 'Javascript', type: 'Front-End', proficiency: '5/10'},
        { name: 'jQuery', type: 'Front-End', proficiency: '5/10'},
        { name: 'Handlebars', type: 'Front-End', proficiency: '5/10'},
        { name: 'Responsive Design', type: 'Front-End', proficiency: '5/10'},
        { name: 'React', type: 'Front-End', proficiency: '5/10'},
        { name: 'PWA', type: 'Front-End', proficiency: '5/10'},
        { name: 'APIs', type: 'Back-End', proficiency: '5/10'},
        { name: 'Node', type: 'Back-End', proficiency: '5/10'},
        { name: 'Express', type: 'Back-End', proficiency: '5/10'},
        { name: 'MySQL, Sequelize', type: 'Back-End', proficiency: '5/10'},
    ])

    return (
        <div className="resume-content">
            <h2>Resume: </h2>
            <a className="download" href={resume} download>Download Resume PDF here.</a>
            <SkillList skills={skills.filter(skill => skill.type === 'Front-End')} title="Front-End"/>
            <SkillList skills={skills.filter(skill => skill.type === 'Back-End')} title="Back-End"/>
        </div>
    )
}

export default ResumePage