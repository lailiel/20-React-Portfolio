const SkillList = ({skills, title}) => {

return (
<div className='resume-container'>
    <h3>{ title } Proficiencies </h3>
    {skills.map(skill=> (
        <ul key={skill.id}className='resume-ul'>
            <li className='resume-il'> {skill.name} 
            </li>
        </ul>
    ))}
</div>
    );     
}
    

export default SkillList;