const SkillList = ({skills, title}) => {

return (
<div className='resume-container'>
    <h3>{ title } Proficiencies </h3>
    {skills.map(skill=> (
        <ul className='resume-ul'>
            <li className='resume-il'> {skill.name} :
            <p>: Level : {skill.proficiency}</p>
            </li>
        </ul>
    ))}
</div>
    );     
}
    

export default SkillList;