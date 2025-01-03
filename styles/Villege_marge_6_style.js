var size = 0;
var placement = 'point';

var style_Villege_marge_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "18.0px \'Osaka\', sans-serif";
    var labelFill = "#003bfe";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.0;
    var textAlign = "right";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("村名") !== null) {
        labelText = String(feature.get("村名"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,59,254,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
