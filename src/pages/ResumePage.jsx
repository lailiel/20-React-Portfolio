import { useState, useEffect } from 'react'
import SkillList from '../components/SkillList'
import resume from "../assets/AbigailLivickResume.pdf"
import Container from 'react-bootstrap/Container'

// ---------------------------------------------

export default function ResumePage ()  {
    
    const [ isSmall, setSmall] = useState (window.innerWidth < 768)
    
    useEffect(() => {
        const handleResize = () => {
          setSmall(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
 

    const [skills, setSkills] = useState ([
        { id:1, name: 'Javascript', type: 'Front-End'},
        { id:2, name: 'HTML', type: 'Front-End'},
        { id:3, name: 'CSS', type: 'Front-End'},
        { id:4, name: 'React', type: 'Front-End'},
        { id:14, name: 'Bootstrap', type: 'Front-End'},
        { id:5, name: 'Responsive Design', type: 'Front-End'},
        { id:6, name: 'jQuery', type: 'Front-End'},
        { id:7, name: 'Handlebars', type: 'Front-End'},
        { id:8, name: 'PWA', type: 'Front-End'},
        { id:13, name: 'MongoDB', type: 'Back-End'},
        { id:9, name: 'APIs', type: 'Back-End'},
        { id:10, name: 'Node', type: 'Back-End'},
        { id:11, name: 'Express', type: 'Back-End'},
        { id:12, name: 'MySQL, Sequelize', type: 'Back-End'},
        

    ])

    return (
        <Container fluid className="p-5" id="resume-content">
            <div className='pb-3'>
                <h2>Resume </h2>
            </div>
        {!isSmall ? (
            <section style={{height: "85vh", overflow:"hidden"}}>
                <iframe src={resume} width="100%" height="100%" title="Abigail Livick Resume"></iframe>
            </section>
            ) : (
            <>
            <a className="download" href={resume} download>Download Resume PDF here.</a>
            <SkillList skills={skills.filter(skill => skill.type === 'Front-End')} title="Front-End"/>
            <SkillList skills={skills.filter(skill => skill.type === 'Back-End')} title="Back-End"/>
            </>)}
        </Container>)
}


// ---------------------------------------------

// Old method using SkillList component

// export default function ResumePage ()  {


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

