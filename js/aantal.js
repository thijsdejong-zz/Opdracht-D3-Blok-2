function aantal(){   
    var w = 400;
    var h = 400;
    var r = h/2;8
    var color = d3.scale.category20c();

    var data_VO = [{"label":"Mannen", "value":482938}, 
                   {"label":"Vrouwen", "value":477740}];

    var data_MBO = [{"label":"Mannen", "value":268146},
                    {"label":"Vrouwen", "value":242711}];

    var data_HBO = [{"label":"Mannen", "value":203585}, 
                    {"label":"Vrouwen", "value":218108}];

    var data_WO = [{"label":"Mannen", "value":117129}, 
                   {"label":"Vrouwen", "value":124242}];

    var data = data_VO;

    drawPie();
    $('#VO1').click(function(){
        data = data_VO;
        $('#ntal').html('');
        drawPie();
    });

     $('#MBO1').click(function(){
        data = data_MBO;
        $('#ntal').html('');
        drawPie();
    });

      $('#HBO1').click(function(){
        data = data_HBO;
        $('#ntal').html('');
        drawPie();
    });

    $('#WO1').click(function(){
        data = data_WO;
        $('#ntal').html('');
        drawPie();
    });

    function drawPie(){            
        var vis = d3.select('#ntal').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
        var pie = d3.layout.pie().value(function(d){return d.value;});

        var arc = d3.svg.arc().outerRadius(r);

        var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
        arcs.append("svg:path")
            .attr("fill", function(d, i){
                return color(i);
            })
            .attr("d", function (d) {
                return arc(d);
            });

        arcs.append("svg:text").attr("transform", function(d){
              d.innerRadius = 0;
              d.outerRadius = r;
            return "translate(" + arc.centroid(d) + ")";})
                .attr("text-anchor", "middle")
                .attr("fill","#FFF")
                .text( function(d, i) {return data[i].label + " (" + data[i].value + ")";});
      }
}