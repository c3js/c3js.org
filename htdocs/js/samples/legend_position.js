var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    },
    legend: {
        position: 'right'
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, 150, 200, 300, 200, 100]
        ]
    });
}, 1000);

setTimeout(function () {
    chart.unload('data1');
}, 2000);

setTimeout(function () {
    chart.toPie();
}, 3000);

setTimeout(function () {
    chart.toLine();
}, 4000);