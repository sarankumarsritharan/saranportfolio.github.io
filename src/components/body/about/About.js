import React from 'react';
import SocialContact from '../../common/social-contact/SocialContact';
import './About.css'

function About() {
    return (
        <div className='about'>
           <div className='about-top'>
               <div className='about-info'>
                Hello, This is <span className='info-name'>Sarankumar</span> Passionate Full stack Developer,
                <br/>loving to work in Challenging Environments and Looking 
                <br/>forward for opportunities.
               </div>
               <div className='about-photo'>
                 <img src={require('../../../assets/Saran white-modified-min.png').default} alt='' className='picture'/>
               </div>

           </div>
           <div>
            <SocialContact/>
          </div>
        </div>
    )
}

export default About
