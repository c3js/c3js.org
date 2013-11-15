var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'bar',
            data2: 'bar'
        },
        groups: [
            ['data1', 'data2']
        ]
    },
    axis: {
        x: {
            type: 'categorized'
        }
    }
});
