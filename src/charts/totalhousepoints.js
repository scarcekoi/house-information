import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'doughnut',
      options: {
        animation: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      },
    }
  );

  const data = {
  labels: [
    'Baldwin',
    'Sotomayor',
    'Mandela',
    'Truth'
  ],
  datasets: [{
    label: 'Total House Points',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(210, 15, 57)',
      'rgb(30, 102, 245)',
      'rgb(64, 160, 43)',
      'rgb(223, 142, 29)'
    ],
    hoverOffset: 4
  }]
};