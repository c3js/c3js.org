var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, -200, -100, 400, 150, 250],
            ['data2', -50, 150, -150, 150, -50, -150],
            ['data3', -100, 100, -40, 100, -150, -50]
        ],
        groups: [
            ['data1', 'data2']
        ],
        type: 'bar',
        labels: {
//            format: function (v, id, i, j) { return "Default Format"; },
            format: {
                y: d3.format('$'),
//                y: function (v, id, i, j) { return "Y Format"; },
//                y2: function (v, id, i, j) { return "Y2 Format"; }
            }
        }
    },
    grid: {
        y: {
            lines: [{value: 0}]
        }
    }
});
