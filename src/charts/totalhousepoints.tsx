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
        label: 'Total House Points Doughnut Chart',
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

    const canvasElement = document.getElementById('totalhousepoints') as HTMLCanvasElement | null;

    if (canvasElement) {
      const chart = new Chart(canvasElement, {
        type: 'doughnut',
        options: {
          responsive: false,
          maintainAspectRatio: false,
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
              font: {
                family: 'Jellee',
                size: 24,
                weight: 'normal',
              },
              text: 'Total House Points Doughnut Chart',
            },
          },
          elements: {
            arc: {
              hoverOffset: 4,
            },
          },
          borderColor: '#181825',
          hoverBorderColor: 'rgb(17, 17, 27)',
        },
        data: data,
      });

      // Cleanup on unmount
      return () => {
        chart.destroy();
      };
    }
  }, [counters]);

  return <canvas id="totalhousepoints" className="chart-canvas" />;
};

export default TotalHousePoints;