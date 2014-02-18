var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50],
            ['data3', -100, 100, -40, 100, -150, -50],
            ['data4', 100, 300, 80, 200, -250, -150]
        ],
        type: 'bar',
        groups: [
            ['data1', 'data2', 'data3']
        ]
    },
    axis: {
        x: {
            type: 'categorized'
        }
    },
    grid: {
        y: {
            lines: [{value: 0}]
        }
    }
});

setTimeout(function () {
    chart.groups([['data1', 'data2', 'data3', 'data4']]);
}, 1000);

setTimeout(function () {
    chart.groups([['data1', 'data3'], ['data2', 'data4']]);
}, 1500);