document.addEventListener('DOMContentLoaded', function () {
    // Data for visualizations
    const waterDemandData = {
        labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
        datasets: [{
            label: 'Water Demand (Million Litres per Day)',
            data: [3200, 3600, 4100, 4600, 5100, 5700],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const pollutionData = {
        labels: ['Yamuna River', 'Groundwater', 'Surface Water'],
        datasets: [{
            label: 'Pollution Levels (mg/L)',
            data: [8.2, 5.5, 7.0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Create water demand chart
    const ctx1 = document.getElementById('waterDemandChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: waterDemandData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Water Demand Over Years in Delhi'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Create pollution chart
    const ctx2 = document.getElementById('pollutionChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: pollutionData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Pollution Levels in Different Water Sources'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
