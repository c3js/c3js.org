var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, -200, -100, 400, 150, 250],
            ['data2', -100, 100, -40, 100, -150, -50]
        ],
        type: 'bar'
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
