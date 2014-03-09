var chart = c3.generate({
    data: {
        columns: [
            ['sample', 30, 200, 100, 400, 150, 250]
        ]
    },
    grid: {
        y: {
            lines: [{value: 50, text: 'Lable 50'}, {value: 300, text: 'Lable 300'}]
        }
    }
});
