function aantal() {
    var csv = d3.dsv(';');

    function drawAantal(element, data) {
        var values = d3.entries(data).map(function(d) {
            return parseFloat(d.value);
        });

       d3.select(element).selectAll('path').attr('fill', '#000000').attr('stroke', '#000');

        for (var geslacht in data) {
            var value = parseFloat(data[geslacht]);
            d3.select(element + ' #' + geslacht).attr('opacity', value);
        }
    }

    d3.xhr('data/manvrouw.svg', function(error, response) {
        var svg = response.responseXML.querySelector('svg').outerHTML;
        d3.select('#ntal .map').html(svg);

        csv('data/VO_mv.csv', function(err, data) {
                drawAantal('#ntal', data[0] );
            });
    });

    function bindButton(id, file) {
            d3.select(id).on('click', function() {
                csv(file, function(err, data) {
                    drawAantal("#ntal", data[0]);
                })
            })
       }

       bindButton('#VO1', 'data/VO_mv.csv');
       bindButton('#MBO1', 'data/MBO_mv.csv');
       bindButton('#HBO1', 'data/HBO_mv.csv');
       bindButton('#WO1', 'data/WO_mv.csv');   
}