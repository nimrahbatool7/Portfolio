import React from 'react'
import './skills.css'
import UIDesgin from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
         <h1 className="skillTitle">
            What I Do
         </h1>
         <span className='skillDesc'>
            Creating intuitive interfaces and seamless user experiences through
            research, prototyping, and user-centered design principles.
         </span>
         <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesgin} alt="UIDesgin" className="skillsImg" />
                <div className="skillBarText">
                    <h2>
                        Web Development 
                    </h2>
                    <p> Building interactive web applications using React, JavaScript, and
            modern CSS frameworks.</p>
                </div>
            </div>
                <div className="skillBar">
                <img src={webDesign} alt="webDesign" className="skillsImg" />
                 <div className="skillBarText">
                    <h2>
                        Game Development
                    </h2>
                    <p>Developing engaging 2D/3D games using Unity and web-based game
            engines with focus on gameplay mechanics.</p>
                </div>
                </div>

                <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillsImg" />
                 <div className="skillBarText">
                    <h2>
                        Artificial Intelligence
                    </h2>
                    <p>Exploring machine learning models and AI applications using Python,
            TensorFlow, and computer vision.</p>
                </div>
                </div>
            
         </div>
    </section>
  )
}

export default Skills;