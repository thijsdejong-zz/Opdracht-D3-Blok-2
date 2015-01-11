function kaart() {
    var csv = d3.dsv(';');

    function drawKaart(element, data) {
        var values = d3.entries(data).map(function(d) {
            return parseFloat(d.value);
        });

       d3.select(element).selectAll('path').attr('fill', '#000000').attr('stroke', '#000');

        for (var gemeente in data) {
            var value = parseFloat(data[gemeente]);
            d3.select(element + ' #' + gemeente)
              .attr('fill-opacity', value)
              .attr('stroke-opacity', value);
        }
    }

    d3.xhr('data/gemeentekaart.svg', function(error, response) {
        var svg = response.responseXML.querySelector('svg').outerHTML;
        d3.select('#kaart .map').html(svg);

        csv('data/VO.csv', function(err, data) {
                drawKaart('#kaart', data[0] );
            });
    });

    function bindButton(id, file) {
            d3.select(id).on('click', function() {
                csv(file, function(err, data) {
                    drawKaart("#kaart", data[0]);
                })
            })
       }

       bindButton('#VO', 'data/VO.csv');
       bindButton('#MBO', 'data/MBO.csv');
       bindButton('#HBO', 'data/HBO.csv');
       bindButton('#WO', 'data/WO.csv');   
}