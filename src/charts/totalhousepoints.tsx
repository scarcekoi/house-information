import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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
        backgroundColor: ['#FF5733', '#1E66F5', '#40A02B', '#DF8E1D'],
        borderColor: '#11111B',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: '#1E1E2E',
        titleColor: '#CDD6F4',
        bodyColor: '#CDD6F4',
      },
      legend: {
        position: 'bottom' as const, // Ensure correct casing for 'bottom'
        labels: {
          color: '#CDD6F4',
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>  {/* Container for chart */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TotalHousePoints;