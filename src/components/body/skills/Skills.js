import React from 'react'
import "./Skills.css"
import Separator from '../../common/separator/Separator'
import {SkillsData} from '../../data/Skills'
import SkillsCard from './Skills-Card'

function Skills() {
    const data= SkillsData
    return (
        <div>
             <Separator/>

             <label className="section-title">Skills</label>
             <div className='skills-container'>
                 {data.map((item)=>{
                     return (
                         <div className='skills-section'>
                             <label className='skills-section-title'>{item.type}</label>                            
                             <div className='skills-list'>
                                 {item.list.map((skill)=>{
                                     return(
                                        <SkillsCard skill={skill}/>
                                     ) 
                                 })}
                             </div>
                         </div>
                     )
                 })}
             </div>
        </div>
    )
}

export default Skills
