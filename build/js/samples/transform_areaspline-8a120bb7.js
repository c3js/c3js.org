var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'bar'
    }
});

setTimeout(function () {
    chart.toAreaSpline('data1');
}, 1000);

setTimeout(function () {
    chart.toAreaSpline('data2');
}, 2000);

setTimeout(function () {
    chart.toBar();
}, 3000);

setTimeout(function () {
    chart.toAreaSpline();
}, 4000);
