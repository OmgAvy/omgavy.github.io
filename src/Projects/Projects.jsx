import React from 'react'
import './Projects.css'

import IMG1 from '../assets/proj_3.png'
import IMG2 from '../assets/proj_2.png'
import IMG3 from '../assets/proj_1.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Multicollinearity Analysis EDA',
    github: 'https://github.com/OmgAvy/ML/tree/master/Analysis',
    url: 'https://www.kaggle.com/code/omgavy/multicollinearity-analysis-eda', // demo url
  },
  {
    id: 2,
    image: IMG2,
    title: 'Telecom Customer Churn Prediction',
    github: 'https://github.com/OmgAvy/ML/tree/master/Telecom%20Customer%20Churn%20Prediction',
    url: 'https://www.kaggle.com/code/omgavy/telecom-customer-churn-prediction', // demo url
  },
  {
    id: 3,
    image: IMG3,
    title: 'Credit Card Fraud Detection',
    github: 'https://github.com/OmgAvy/ML/tree/master/Credit%20Card%20Fraud%20Detection',
    url: 'https://www.kaggle.com/code/omgavy/credit-card-fraud-detection', // demo url
  }
]

const Projects = () => {
  return (
    <section id='project' className='container'>
      <h2>more ...</h2>

      <div className="project__container">
        {
          data.map(({ id, image, title, github, url }) => {
            return (
              <article key={id} className="project__item">
                <div className="project__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="project__item-cta">
                  <a rel="noopener noreferrer" href={github} target='_blank' className='btn'>Github</a>
                  <a rel="noopener noreferrer" href={url} target='_blank' className='btn btn-primary'>View</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>

  )
}

export default Projects