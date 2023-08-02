import resume from "../assets/AbigailLivick.pdf"

export default function ResumePage() {
    return (
        <div className="resume-content">
            <h2>Resume: </h2>
            <a href={resume} download>Download Resume PDF here.</a>
            <h3>Front-End Proficiencies</h3>
                <ul className="resume-ul">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Handlebars</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>PWA</li>
                </ul>
            <h3>Back-End Proficiencies</h3>
                <ul className="resume-ul">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>responsive design</li>
                    <li>React</li>
                </ul>
        </div>
    )
}