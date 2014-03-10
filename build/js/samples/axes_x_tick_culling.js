var chart = c3.generate({
    data: {
        columns: [
            ['sample', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 200, 100, 400, 150, 250]
        ]
    },
    axis: {
        x: {
            type: 'categorized',
            tick: {
                culling: true
                // for normal axis, default true
                // for categorized axis, default false
            }
        }
    }
});
