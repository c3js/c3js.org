var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]
        ],
        selection: {
            enabled: true
        }
    },
    axis: {
        x: {
            type: 'categorized'
        }
    }
});

var defaultMessage = $('#message').html(), currentIndex = 0, timer, duration = 1500, demos = [
    function () {
        chart.load({
            columns: [['data2', 100, 30, 200, 320, 50, 150, 230, 80, 150]]
        })
        setMessage('Load data2');
    },
    function () {
        chart.load({
            columns: [['data3', 70, 90, 170, 220, 100, 110, 130, 40, 50]]
        })
        setMessage('Load data3');
    },
    function () {
        chart.select(['data1'], [2]);
        setMessage('Select point for index 2 of data1');
    },
    function () {
        chart.select(['data1'], [4,6]);
        setMessage('Select point for index 4,6 of data1');
    },
    function () {
        chart.unselect();
        setMessage('Unselect points');
    },
    function () {
        chart.focus('data2');
        setMessage('Focus on data2');
    },
    function () {
        chart.focus('data3');
        setMessage('Focus on data3');
    },
    function () {
        chart.revert();
        setMessage('Defocus');
    },
    function () {
        chart.load({
            columns: [['data1', 300, 230, 400, 520, 230, 250, 330, 280, 250]]
        })
        setMessage('Update data1');
    },
    function () {
        chart.load({
            columns: [['data2', 30, 50, 90, 120, 40, 50, 80, 70, 50]]
        })
        setMessage('Update data2');
    },
    function () {
        chart.regions([{start:0.5,end:2.5}]);
        setMessage('Add region from 1 to 3');
        },
    function () {
        chart.regions.add([{start:6.5}]);
        setMessage('Add region from 7 to end');
    },
    function () {
        chart.regions([]);
        setMessage('Clear regions');
    },
    function () {
        chart.toBar();
        setMessage('Show as bar chart');
    },
    function () {
        chart.groups([['data2','data3']]);
        setMessage('Grouping data2 and data3');
    },
    function () {
        chart.groups([['data1', 'data2', 'data3']]);
        setMessage('Grouping data1, data2 and data3');
    },
    function () {
        chart.groups([['data2', 'data3']]);
        chart.toLine('data1');
        setMessage('Show data1 as line');
    },
    function () {
        chart.unload('data3');
        setMessage('Unload data3');
    },
    function () {
        chart.unload('data2');
        setMessage('Unload data2');
    },
    function () {
        chart.toLine(['data1','data2', 'data3']);
        chart.groups([['data1'], ['data2'], ['data3']]);
        chart.load({
            columns: [['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]]
        })
        setMessage('Starting Demo..');
    }
];

function setMessage(message) {
    document.getElementById('message').innerHTML = '<button id="demoMessage" type="button" class="btn btn-default" onclick="stopDemo();" data-toggle="tooltip" data-animation="false" title="Stop Demo" onclick="stopDemo();">'+message+'</button>';
//        $('#demoMessage').tooltip('toggle');
}

function startDemo() {
    setMessage('Starting Demo..');
    timer = setInterval(function(){
        if (currentIndex == demos.length) currentIndex = 0;
        demos[currentIndex++]();
    }, duration);
}

function stopDemo() {
    clearInterval(timer);
    document.getElementById('message').innerHTML = defaultMessage;
}
