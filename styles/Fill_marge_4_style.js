var size = 0;
var placement = 'point';
function categories_Fill_marge_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '伊勢屋村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,99,240,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伊予田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(113,201,132,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '一之江新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(84,188,223,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下鎌田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(206,105,144,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下今井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(22,99,170,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下篠崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(40,213,49,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,109,32,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小松村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(124,97,231,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,114,220,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下木下川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(168,95,205,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '嘉兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(96,226,113,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '花又村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,32,60,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鎌倉新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,137,221,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '逆井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(197,201,82,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '久右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,207,207,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '久左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,119,198,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '興ノ宮村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(25,99,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '隅田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(96,228,206,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '桑川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(62,142,196,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '欠真間村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(135,218,235,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(217,123,145,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '佐野新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(24,139,216,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '笹ヶ崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(25,99,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '四ツ木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(91,120,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鹿骨村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,145,128,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '篠原':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(148,66,225,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '篠原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,222,28,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '若宮村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(210,194,88,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '渋江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(81,123,228,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小岩田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,97,97,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '松本村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(124,75,215,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上一色村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(59,213,141,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上鎌田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(118,233,197,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上今井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(26,234,119,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上篠崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,139,230,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(59,79,228,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小松村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,27,206,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,193,130,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上木下川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,84,132,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '新堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,187,107,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西一之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(213,110,182,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西宇喜田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,213,80,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西小松川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(207,37,130,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西船堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(63,133,224,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '青砥村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,165,82,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '川端村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(40,231,186,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '前野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(226,122,129,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '善左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(161,235,25,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大谷田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,214,81,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大畑村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(216,207,30,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大和田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(123,182,211,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '辰沼新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(181,91,211,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '谷河内村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(50,44,233,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '淡ノ須村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(123,205,82,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(65,46,204,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,89,27,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,91,46,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(146,14,240,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(203,91,80,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,101,135,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東一之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,167,206,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東宇喜田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(121,214,133,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東小松川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,240,42,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東船堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(46,221,151,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '当代島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(82,219,77,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '内匠新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(109,240,157,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '二之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(115,178,216,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '梅田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(219,118,205,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '宝木塚村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,214,118,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(169,64,230,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀切村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(192,56,223,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本一色村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,225,26,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本行徳村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(79,31,213,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '木下村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(94,206,219,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '立石村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(217,129,47,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '六ツ木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(210,231,19,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Fill_marge_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("村名");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Fill_marge_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
