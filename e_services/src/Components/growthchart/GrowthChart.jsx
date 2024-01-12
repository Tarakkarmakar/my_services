
import Chart from 'chart.js/auto'; 


import React, { useEffect, useRef } from 'react';
import "../../Components/styles.css"
const GrowthChart = ({SalesData}) => {
    const chartRef = useRef(null);
    let chartInstance = null; 
  
   
    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','Jan'];
    
  
    // Define the chart data and options
    const chartData = {
      labels: months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: SalesData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    };
  
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    useEffect(() => {
      //  when the component mounts
      if (chartRef.current) {
        chartInstance = new Chart(chartRef.current, {
          type: 'line',
          data: chartData,
          options: chartOptions,
        });
      }
  
      // Clean up and destroy the chart when the component unmounts
      return () => {
        if (chartInstance) {
          chartInstance.destroy();
        }
      };
    }, [chartData, chartOptions,SalesData]);
  
    return (
      <div className="sales-growth-chart">
        <h2>Monthly Sales Growth</h2>
        <canvas ref={chartRef} />
      </div>
    );
};

export default GrowthChart;
