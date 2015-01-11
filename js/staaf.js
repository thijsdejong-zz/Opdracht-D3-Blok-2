function staaf(){   
    var csv = d3.dsv(';');
        csv('data/data_bar.csv', function(err, data) {
            MBO = data[0];
            HBO = data[1];
            WO  = data[2];
            var values_MBO = d3.values(MBO);
            var values_HBO = d3.values(HBO);
            var values_WO  = d3.values(WO);
            values_MBO.unshift(['MBO Studenten']);
            values_HBO.unshift(['HBO Studenten']);
            values_WO.unshift(['WO Studenten']);
            var chart = c3.generate({
                bindto : '#chart',
                data : {
                    columns : [ values_MBO, values_HBO, values_WO ],
                    type : 'bar',
                    
                },
                axis : {
                    x : {
                        type : 'category',
                        categories : d3.keys(data[0])
                    }
                }
            })
        });
}