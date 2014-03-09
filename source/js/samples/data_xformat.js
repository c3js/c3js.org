var chart = c3.generate({
    data: {
        x: 'date',
        x_format : '%Y%m%d', // default '%Y-%m-%d'
        columns: [
            ['date', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['sample', 30, 200, 100, 400, 150, 250]
        ]
    },
    axis : {
        x : {
            type : 'timeseries'
        }
    }
});
