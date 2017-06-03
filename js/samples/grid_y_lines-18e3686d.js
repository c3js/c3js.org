var chart = c3.generate({
    data: {
        columns: [
            ['sample', 30, 200, 100, 400, 150, 250],
            ['sample2', 1300, 1200, 1100, 1400, 1500, 1250],
        ],
        axes: {
            sample2: 'y2'
        }
    },
    axis: {
        y2: {
            show: true
        }
    },
    grid: {
        y: {
            lines: [
                {value: 50, text: 'Lable 50 for y'},
                {value: 1300, text: 'Lable 1300 for y2', axis: 'y2', position: 'start'},
                {value: 350, text: 'Lable 350 for y', position: 'middle'}
            ]
        }
    }
});
