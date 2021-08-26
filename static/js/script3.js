var chartData = [{
        "Name": "Aman",
        "Freq": 20
    },
    {
        "Name": "Bob",
        "Freq": 40
    },
    {
        "Name": "Charli",
        "Freq": 46
    },
    {
        "Name": "Dev",
        "Freq": 34
    },
    {
        "Name": "Elish",
        "Freq": 100
    },
    {
        "Name": "Charli",
        "Freq": 56
    },
    {
        "Name": "Dev",
        "Freq": 78
    },
    {
        "Name": "Elish",
        "Freq": 15
    }
]




var barChart = document.querySelector('.bar__chart');

chartData.map((data) => {

    // using svg 

    var barChartItem = document.createElement('div');



    barChartItem.classList.add('bar__chart-item')
    barChartItem.style.height = `${data.Freq}%`;
    barChartItem.innerHTML = `${data.Freq}%  <span class="lable">${data.Name}</span>`
    console.log(data.Freq)
    barChart.appendChild(barChartItem)
    console.log(barChartItem)
    console.log(barChart)


})