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

// creating svg icon
const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
);

iconSvg.setAttribute('fill', 'green');
iconSvg.setAttribute('viewBox', '0 0 24 24');
iconSvg.setAttribute('stroke-Width', '10')
iconSvg.setAttribute('stroke', 'black');

console.log(iconSvg)

const barChart = document.querySelector('.bar__chart');
const barChartShow = barChart.appendChild(iconSvg)
chartData.map((data) => {

    const rectAngle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    // const rectPath = document.createElementNS(
    //     'http://www.w3.org/2000/svg',
    //     'path'
    // );
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const textSpan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    rectAngle.setAttribute('fill', 'red');
    const percentage = document.createTextNode(`${data.Freq}%`);
    const stdname = document.createTextNode(`${data.Name}`)


    text.appendChild(percentage)
    textSpan.appendChild(stdname)
    text.appendChild(textSpan)
    rectAngle.appendChild(text)
    barChartShow.appendChild(rectAngle)
    console.log(data)

})