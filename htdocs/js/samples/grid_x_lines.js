var chart = c3.generate({
    data: {
        columns: [
            ['sample', 30, 200, 100, 400, 150, 250]
        ]
    },
    grid: {
        x: {
            lines: [{value: 3, text: 'Lable 3'}, {value: 4.5, text: 'Lable 4.5'}]
        }
    }
});
