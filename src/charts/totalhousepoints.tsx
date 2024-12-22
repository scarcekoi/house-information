import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface TotalHousePointsProps {
  counters: {
    Baldwin: number;
    Sotomayor: number;
    Mandela: number;
    Truth: number;
  };
}

const TotalHousePoints: React.FC<TotalHousePointsProps> = ({ counters }) => {
  const data = {
    labels: ['Baldwin', 'Sotomayor', 'Mandela', 'Truth'],
    datasets: [
      {
        label: 'House Points',
        data: [counters.Baldwin, counters.Sotomayor, counters.Mandela, counters.Truth],
        borderColor: '#FF5733',
        backgroundColor: '#FF5733',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TotalHousePoints;