var chart = c3.generate({
    data: {
        columns: [
            ['sample', 30000, 20000, 10000, 40000, 15000, 250000]
        ]
    },
    axis : {
        y : {
            tick: {
                format: d3.format("s")
            }
        }
    },
    tooltip: {
        format: {
            title: function (d) { return 'Data ' + d; },
            value: d3.format(',')
        }
    }
});
