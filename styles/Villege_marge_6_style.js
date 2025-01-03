var style_Villege_marge_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "18.0px 'Osaka', sans-serif";
    var labelFill = "#003bfe";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.0;
    var textAlign = "center";  // ラベルを中央に配置
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';  // ポイントとしてラベルを配置

    // 村名を取得
    if (feature.get("村名") !== null) {
        labelText = String(feature.get("村名"));
    }

    // ポリゴンの場合、ラベルを中心に配置
    var geometry = feature.getGeometry();
    var centroid = geometry.getInteriorPoint(); // ポリゴンの重心（内部点）

    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0,59,254,1.0)', 
            width: 1.9
        }),
        text: new ol.style.Text({
            textAlign: textAlign,
            textBaseline: 'middle',
            font: labelFont,
            text: labelText,
            fill: new ol.style.Fill({ color: labelFill }),
            stroke: new ol.style.Stroke({
                color: bufferColor, 
                width: bufferWidth
            }),
            offsetX: offsetX,
            offsetY: offsetY,
            placement: placement,
            geometry: centroid // ラベル位置をポリゴンの中心に設定
        })
    })];

    return style;
};