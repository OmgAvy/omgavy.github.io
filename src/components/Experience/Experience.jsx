import React from 'react'
import './experience.css'
// import { BsPatchCheckFill } from 'react-icons/bs'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Experience = () => {
  return (
        <Tabs id='experience' className='experience__container' >
          <TabList className='experience__tab' >
            <Tab><h3>Skills</h3></Tab>
            <Tab><h3>Work</h3></Tab>
            <Tab><h3>Education</h3></Tab>
          </TabList>
          <TabPanel className='experience__content'>
            <ul>
              <li><text>⌨️ Computer Skills</text><p>Unix & Windows.</p></li>
              <li><text>🧠 Machine Learning</text><p>Classification, Regression, Feature Engineering, Clustering.</p></li>
              <li><text>📊 Data Analysis</text><p>Excel(sheets), Pandas, Numpy, Modeling, Web Scraping, Seaborn, Data mining, Plotly.</p></li>
            </ul>
          </TabPanel>
          <TabPanel className='experience__content' >
            <ul>
              <li><text>👨‍💼 Data Analyst</text><p>Data cleaning, Integrity, Calculations, Problem
                Solving and Reporting by using Google Sheets, SQL and Python in Everest Fleet Pvt.(June 2022, Dec 2022)</p></li>
              <li><text>🏥 Aug 2019, Feb 2020 </text><p>Volunteer at TATA Memorial Hospital,
                I assisted patients and provided support to staff in the CBC department.</p></li>
              <li><text>🎨 Nov 2019, Jan 2020</text><p>Lead designer and publicist for the main event, Sankhyashastra.</p></li>
              <li><text>💻 Feb 2013, Jun 2013</text><p>Machine Operator in the Desktop Publishing Centre.</p></li>
            </ul>
          </TabPanel >
          <TabPanel className='experience__content' >
            <ul>
              <li><text>🎒 Higher Secondary Education</text><p>NES Ratnam College of Science and Commerce.</p></li>
              <li><text>🏫 Bachelor's of Science in Statistics</text><p>KJ SOMAIYA College of Science and Commerce.</p></li>
              <li><h3>📜 Certifications</h3>
                <ul>
                  <li><a href="https://courses.cognitiveclass.ai/certificates/f7be6375780b4864bd06789952f8c7e8">Python 101 for Data Science</a></li>
                  <li><a href="https://courses.cognitiveclass.ai/certificates/be69793c3b764057834956442d1195a4">Data Analysis with Python</a></li>
                  <li><a href="https://courses.cognitiveclass.ai/certificates/66951b48a8684e2999257501f0c1b7c3">Data Visualization with Python</a></li>
                  <li><a href="https://courses.cognitiveclass.ai/certificates/96c54711858543ffbd20d9458a376664">Machine Learning with Python</a></li>
                </ul></li>
            </ul>
          </TabPanel>
        </Tabs>
  )
}

export default Experience