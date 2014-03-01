var chart = c3.generate({
    data: {
        columns: [
            ['sample', 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250]
        ]
    },
    axis: {
        x: {
            tick: {
                culling: false
                // for normal axis, default true
                // for categorized axis, default false
            }
        }
    }
});
