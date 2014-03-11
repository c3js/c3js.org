var chart = c3.generate({
    data: {
        columns: [
            ['sample', 30, 200, 100, 400, 150, 250]
        ]
    },
    regions: [
        {start:2,end:4,class:'region1'}
    ]
});
