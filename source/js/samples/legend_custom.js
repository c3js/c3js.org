var chart = c3.generate({
    data: {
        columns: [
            ['data1', 100],
            ['data2', 300],
            ['data3', 200]
        ],
        type: 'pie'
    },
    legend: {
        show: false
    }
});

function toggle(id) {
    chart.toggle(id);
}

var legend = d3.select('.container').insert('div', '.chart').attr('class', 'legend');
legend.append('span').attr('data-id', 'data1').html('data1');
legend.append('span').attr('data-id', 'data2').html('data1');
legend.append('span').attr('data-id', 'data3').html('data1');

d3.selectAll('.legend span')
.each(function () {
    var id = d3.select(this).attr('data-id');
    d3.select(this).style('background-color', chart.color(id));
})
.on('mouseover', function () {
    var id = d3.select(this).attr('data-id');
    chart.focus(id);
})
.on('mouseout', function () {
    var id = d3.select(this).attr('data-id');
    chart.revert();
})
.on('click', function () {
    var id = d3.select(this).attr('data-id');
    chart.toggle(id);
});
