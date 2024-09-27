import riskData from '../data/riskData.json';
import { Chart as Chartjs, scales } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import '../App.css';
import '../styles/arrow.css';
import RiskLevel from './riskLevel';

const BarChart = () => {
  const topLabels = ['Fragmented', 'Volatil', 'Global', 'New players', 'Adaptors'];
  const bottomLabels = ['Consolidated', 'Stable', 'Local', 'Industry', 'Laggers'];

  const customLabelsPlugin = {
    id: 'customLabels',
    afterDatasetsDraw: (chart) => {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0);
      const chartArea = chart.chartArea;

      ctx.save();
      ctx.font = '13px Sans-serif';
      ctx.fillStyle = '#3A0C77';
      ctx.textAlign = 'center';

      meta.data.forEach((bar, index) => {
        const topLabel = topLabels[index];
        ctx.fillText(topLabel, bar.x, chartArea.top - 20);
        const bottomLabel = bottomLabels[index];
        ctx.fillText(bottomLabel, bar.x, chartArea.bottom + 15);
      });
      ctx.restore();

      chart.data.datasets.forEach((dataset) => {
        meta.data.forEach((bar, index) => {
          const value = dataset.data[index];

          ctx.save();
          ctx.font = '15px Arial';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.fillText(value, bar.x, bar.y - 5);
          ctx.restore();
        });
      });
    },
  };

  return (
    <div className=' '>
      <div className='chart-container'>
      <div className=' flex bar-box gap-4'> {/* Chart container that centers the bar chart */}
        <Bar
        className='  '
          data={{
            labels: riskData.map((data) => data.label),
            datasets: [
              {
                label: "Risk Evaluation",
                data: riskData.map((data) => data.value),
                backgroundColor: ["rgba(58, 12, 118, 1)"],
                borderRadius: 20,
                borderSkipped: false,
                barThickness: 25,
                hoverBackgroundColor: "rgba(255,99,132,0.8)",
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 10,
                ticks: {
                  color: '#000000',
                  font: { size: 14 },
                  padding: 20,
                },
                grid: {
                  color: '#000000',
                  lineWidth: 0.5,
                },
              },
              x: {
                ticks: {
                  color: '#000000',
                  font: { size: 15 },
                  padding: 30,
                },
                grid: {
                  color: '#000000',
                  lineWidth: 0.5,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            layout: {
              padding: {
                top: 60,
                bottom: 1,
                left: 60,  // Add padding on the left to reduce grid width
                right: 60, // Add padding on the right to reduce grid width
              },
            },
          }}
          plugins={[customLabelsPlugin]}
        />

        {/* Risk level indicators */}
        <RiskLevel />
      </div>
      </div>
    </div>
  );
};

export default BarChart;
