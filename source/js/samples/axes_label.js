var chart = c3.generate({
    data: {
        columns: [
            ['sample', 30, 200, 100, 400, 150, 250]
        ]
    },
    axis: {
        y: {
            label: 'Y Label'
        },
        x: {
            label: 'X Label'
        }
    }
});
