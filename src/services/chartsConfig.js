export const ChartConfig = (currentDataUsa, selectValueState) => {
   const ChartsConfig = {
      height: 200,
      data: {
         labels: currentDataUsa.map(data => data.Year),
         datasets: [{
            label: selectValueState,
            data: currentDataUsa.map(data => data.Population),
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
         },
         ]
      },
      options: {
         // maintainAspectRatio: false,
         scales: {
            yAxes: [
               {
                  ticks: {
                     beginAtZero: true
                  }
               }
            ]
         },
         plugins: {
            legend: {
               labels: {
                  font: {
                     size: 14
                  }
               }
            }
         }
      }
   }
   return ChartsConfig
}
