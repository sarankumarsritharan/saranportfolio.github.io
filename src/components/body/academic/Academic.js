import React from 'react'
import { AcademicData } from "../../data/Academic";
import AcademicCard from "./Academic-card";
import './Academic.css'
import Separator from '../../common/separator/Separator';

export default function Academic() {
    const data = AcademicData;
    return (
        <div className='academic'>
            <Separator/>
            <label className='section-title'>Academics</label>

            <div className="academic-list">
        {data.map((item) => {
          return <AcademicCard item={item} />;
        })}
      </div>
    </div>
    )
}






 
      
      
     



