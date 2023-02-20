import React from 'react'
import './aboutme.css'
import Experience from '../Experience/Experience'
import ExperienceGraph from '../../Projects/ExperienceGraph';


const AboutMe = () => {
  return (
    <section id='about' className='container'>
      <div className='aboutme'>
        <h1>About Me</h1>
        <p>Hi 👋,<br />
          So recently, I've been working as a Data Analyst in my past company which
          requires skills like data cleaning, data intergrity, data manipulation,
          calculations and problem solving by using python scripts and sql queries.
        </p>
        <p>Additionally, I worked on Gsheet for Reporting, Analysis and calculations.</p>
        <p>
          So right now I'm trying to learn different skills to achieve better goals,
          and practice has made me better and better every time.</p>
      </div>

      <div className='about__container'>
        <h2>Experience</h2>
        <div className="about_experience">
          <ExperienceGraph />
          <Experience />
        </div>
      </div>
    </section>
  )
}

export default AboutMe