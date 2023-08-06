// import { useState } from 'react'
// import SkillList from '../components/SkillList'
import resume from "../assets/AbigailLivickResume.pdf"
import Container from 'react-bootstrap/Container'

// ---------------------------------------------

// Improved page using iframe vs component

export default function ResumePage ()  {
    return (
        <Container fluid className="py-4 px-5" id="resume-content">
            <div className='my-3 pb-3'>
                <h2>Resume: </h2>
            </div>
            <section style={{height: "85vh", overflow:"hidden"}}>
                <iframe src={resume} width="100%" height="100%" title="Abigail Livick Resume"></iframe>
            </section>
        </Container>
    )
}


// ---------------------------------------------

// Old method using SkillList component

// export default function ResumePage ()  {
//     const [skills, setSkills] = useState ([
//         { name: 'HTML', type: 'Front-End', proficiency: '5/10'},
//         { name: 'CSS', type: 'Front-End', proficiency: '5/10'},
//         { name: 'Javascript', type: 'Front-End', proficiency: '5/10'},
//         { name: 'jQuery', type: 'Front-End', proficiency: '5/10'},
//         { name: 'Handlebars', type: 'Front-End', proficiency: '5/10'},
//         { name: 'Responsive Design', type: 'Front-End', proficiency: '5/10'},
//         { name: 'React', type: 'Front-End', proficiency: '5/10'},
//         { name: 'PWA', type: 'Front-End', proficiency: '5/10'},
//         { name: 'APIs', type: 'Back-End', proficiency: '5/10'},
//         { name: 'Node', type: 'Back-End', proficiency: '5/10'},
//         { name: 'Express', type: 'Back-End', proficiency: '5/10'},
//         { name: 'MySQL, Sequelize', type: 'Back-End', proficiency: '5/10'},
//     ])

//     return (
//         <Container fluid className="py-4 px-5" id="resume-content">
//             <div className='my-3'>
//                 <h2>Resume: </h2>
//             </div>
//             <a className="download" href={resume} download>Download Resume PDF here.</a>
//             <SkillList skills={skills.filter(skill => skill.type === 'Front-End')} title="Front-End"/>
//             <SkillList skills={skills.filter(skill => skill.type === 'Back-End')} title="Back-End"/>
//         </Container>
//     )
// }

