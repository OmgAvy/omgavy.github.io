import React from 'react'
import BarPlot from '../components/Plot/BarPlot'
import './ExperienceGraph.css'

let currentData = [
  { 'id': 1, 'language': 'Python', 'rating': 9 },
  { 'id': 2, 'language': 'Excel', 'rating': 8 },
  { 'id': 3, 'language': 'ML / DL', 'rating': 6 },
  { 'id': 4, 'language': 'HTML', 'rating': 6 },
  { 'id': 5, 'language': 'SQL', 'rating': 5 },
  { 'id': 6, 'language': 'CSS', 'rating': 4 },
  { 'id': 7, 'language': 'Javascript', 'rating': 4 },
  { 'id': 8, 'language': 'C', 'rating': 2 },
  { 'id': 9, 'language': 'R', 'rating': 2 },
]


const ExperienceGraph = () => {
  const userData = {
    labels: currentData.map((data) => data.language),
    datasets: [
      {
        label: 'Rating',
        data: currentData.map((data) => data.rating),
        // borderColor: 'rgb(53, 162, 235)',
        backgroundColor: [
          '#BA4A00',
          '#2E86C1',
          '#F1C40F',
          '#1A5276',
          '#16A085',
        ],
        // backgroundColor: '#467999',
      },
    ]
  }


  return (
    <div className='experience_plot'>
      <BarPlot chartData={userData} />
    </div>
  )
}

export default ExperienceGraph