import Chart from 'chart.js/auto';

(async function() {
  const data = {
    labels: [
      'Baldwin',
      'Sotomayor',
      'Mandela',
      'Truth'
    ],
    datasets: [{
      label: 'Total House Points',
      data: [300, 50, 100, 150],
      backgroundColor: [
        'rgb(210, 15, 57)',
        'rgb(30, 102, 245)',
        'rgb(64, 160, 43)',
        'rgb(223, 142, 29)'
      ],
      hoverOffset: 4
    }]
  };

  new Chart(
    document.getElementById('totalhousepoints'),
    {
      type: 'doughnut',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(24, 24, 37, 0.8)',
            titleColor: '#cdd6f4',
            bodyColor: '#cdd6f4',
            footerColor: '#cdd6f4'
          }
        },
        borderColor: '#cdd6f4'
      },
      data: data,
    }
  );
})();