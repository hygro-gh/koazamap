var size = 0;
var placement = 'point';

var style_Koaza_marge_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFill = "#e41a1c";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("字名") !== null) {
        labelText = String(feature.get("字名"));
    }
    
    // ズームレベル取得
    var zoom = map.getView().getZoom();

    // ズームに応じてフォントサイズを変える
    var labelFont = "14px 'Osaka', sans-serif";
    if (zoom < 15) {
        labelFont = "10px 'Osaka', sans-serif";
    }
    if (zoom < 14) {
        labelFont = "8px 'Osaka', sans-serif";
    }
    
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(228,26,28,1.0)', 
            lineDash: null, 
            lineCap: 'square', 
            lineJoin: 'bevel', 
            width: 1.5
        }),
        text: createTextStyle(
            feature, 
            resolution, 
            labelText, 
            labelFont, 
            labelFill, 
            placement, 
            bufferColor, 
            bufferWidth,
        )
    })];

    return style;
};
