var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]
        ]
    },
    axis: {
        x: {
            type: 'categorized'
        }
    }
});
