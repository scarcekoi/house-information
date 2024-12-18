import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

interface TotalHousePointsProps {
  counters: {
    Baldwin: number;
    Sotomayor: number;
    Mandela: number;
    Truth: number;
  };
}

const TotalHousePoints: React.FC<TotalHousePointsProps> = ({ counters }) => {
  useEffect(() => {
    const data = {
      labels: ['Baldwin', 'Sotomayor', 'Mandela', 'Truth'],
      datasets: [{
        label: 'Total House Points',
        data: [counters.Baldwin, counters.Sotomayor, counters.Mandela, counters.Truth],
        backgroundColor: [
          'rgb(210, 15, 57)',
          'rgb(30, 102, 245)',
          'rgb(64, 160, 43)',
          'rgb(223, 142, 29)',
        ],
        hoverOffset: 4,
      }],
    };

    // Get the canvas element and assert it's not null
    const canvasElement = document.getElementById('totalhousepoints') as HTMLCanvasElement | null;

    if (canvasElement) {
      const chart = new Chart(canvasElement, {
        type: 'doughnut',
        options: {
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(24, 24, 37, 0.8)',
              titleColor: '#cdd6f4',
              bodyColor: '#cdd6f4',
              footerColor: '#cdd6f4',
            },
            title: {
              color: '#cdd6f4',
              display: true,
              font: Jellee Roman
            },
          },
          borderColor: '#cdd6f4',
          hoverBorderColor: '#6c7086',
          spacing: 45,
        },
        data: data,
      });

      return () => {
        chart.destroy();
      };
    }
  }, [counters]);

  return <canvas id="totalhousepoints" width="100" height="100"></canvas>;
};

export default TotalHousePoints;