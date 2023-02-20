import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'; // ???

const BarPlot = ({ chartData, chartTitle }) => {
  let delayed;
  const options = {
    responsive: true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    indexAxis: 'y', // horizontal chart and x for bar chart
    scales: {
      y:{ticks:{font:{size:10}},grid:{display:false}},
      x:{grid:{display:false},title:{display:true,text:'Ratings'}},
    },
    elements: {
      bar: {
        // borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
    },
    plugins: {
      legend: { position: 'top', display: false,},
      title: { display: true, text: chartTitle }
    }
  }

  return (
    <Bar 
    data={chartData}
    options={options}
     />
  )
}

export default BarPlot