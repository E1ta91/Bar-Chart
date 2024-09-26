import riskData from '../data/riskData.json';
import { Chart as Chartjs, scales } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import '../App.css';
import '../styles/arrow.css'
import RiskLevel from './riskLevel';

const BarChart = () => {
  // Define the top labels corresponding to each bar
  const topLabels = ['Fragmented', 'Volatil', 'Global', 'New players', 'Adaptors'];
  const bottomLabels = ['Consolidated', 'Stable', 'Local', 'Industry', 'Laggers']; // Define bottom labels

  // Custom plugin to show the top and bottom labels and value on top of each bar
  const customLabelsPlugin = {
    id: 'customLabels',
    afterDatasetsDraw: (chart) => {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0); // Get dataset meta for bar positions
      const chartArea = chart.chartArea;

      // Draw top labels above the chart, aligned with each bar
      ctx.save();
      ctx.font = '13px Sans-serif'; // Font settings for top labels
      ctx.fillStyle = '#3A0C77'; // Label color
      ctx.textAlign = 'center';

      meta.data.forEach((bar, index) => {
        const topLabel = topLabels[index]; // Get corresponding top label
        ctx.fillText(topLabel, bar.x, chartArea.top - 20); // Adjust for spacing above the chart
        const bottomLabel = bottomLabels[index]; // Get corresponding bottom label
        ctx.fillText(bottomLabel, bar.x, chartArea.bottom + 15); // Adjust +15 for spacing below the x-axis
      });
      ctx.restore();

      // Draw bar value labels on top of each bar (slightly above)
      chart.data.datasets.forEach((dataset, i) => {
        meta.data.forEach((bar, index) => {
          const value = dataset.data[index];

          ctx.save();
          ctx.font = '15px Arial'; // Font settings for value labels
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';

          // Position the value label just above each bar
          ctx.fillText(value, bar.x, bar.y - 5); // Adjust for spacing above the bar
          ctx.restore();
        });
      });
    },

   
  };
 

  return (
    <div className='flex justify-center items-center pt-12  '>

      <div className='chart-container flex space-x-4'>
        <Bar
          data={{
            labels: riskData.map((data) => data.label), // X-axis labels
            datasets: [
              {
                label: "Risk Evaluation",
                data: riskData.map((data) => data.value),
                backgroundColor: ["rgba(58, 12, 118, 1)"],
                borderRadius: 20,
                borderSkipped: false,
                barThickness: 25,
                hoverBackgroundColor: "rgba(255,99,132,0.8)",
                
              }
            ]
          }}
  
          options={{
            responsive: true,
            maintainAspectRatio: false, // Optional: Adjust based on your layout
            scales: {
              y: {
                beginAtZero: true,
                max: 10,
                ticks: {
                 
                  color: '#000000',
                  font: {
                    size: 14,
                  },
                  padding: 10,
                  margin: 20,
                },
              },
              x: {
                ticks: {
                  color: '#000000',
                  font: {
                    size: 15,
                  },
                  padding: 30, // Add padding to move x-axis labels lower
                },
                grid: {
                  display: true, // Hide x-axis grid lines if needed
                },
              },
            },
            plugins: {
              legend: {
                display: false, // Hide the legend if not needed
              },
             
            },
            layout: {
              padding: {
                top: 60, // Add extra padding on top for the labels
                bottom: 1, // Increase padding at the bottom for more space
              },
            },
           
          }}
         
          plugins={[customLabelsPlugin]} // Add your custom plugin

          
          
        />

        {/* Risk level indicators  */}
          <RiskLevel/>
        

      </div>

    </div>

  );
};

export default BarChart;
