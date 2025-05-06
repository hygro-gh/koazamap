var size = 0;
var placement = 'point';

var style_Villege_marge_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "16px \'Osaka\', sans-serif";
    var labelFill = "#003bfe";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("村名") !== null) {
        labelText = String(feature.get("村名"));
    }
    
        // ズームレベル取得
    var zoom = map.getView().getZoom();

    // ズームに応じてフォントサイズを変える
    var labelFont = "18px 'Osaka', sans-serif";
    if (zoom < 15) {
        labelFont = "14px 'Osaka', sans-serif";
    }
    if (zoom < 14) {
        labelFont = "12px 'Osaka', sans-serif";
    }
      
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,59,254,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
