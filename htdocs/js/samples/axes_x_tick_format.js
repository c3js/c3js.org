var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01'],
            ['sample', 30, 200, 100, 400, 150, 250]
        ]
    },
    axis : {
        x : {
            type : 'timeseries',
            tick: {
                format: '%Y'
            }
        }
    }
});
