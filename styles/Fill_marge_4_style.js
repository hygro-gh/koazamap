var size = 0;
var placement = 'point';
function categories_Fill_marge_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '伊興村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(18,244,229,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伊勢屋村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(18,244,229,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伊藤谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,5,181,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伊予田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,5,181,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '一之江新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(118,241,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '永代新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(118,241,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '越中島新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(52,90,242,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '猿ヶ又村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,28,5,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '猿江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,28,5,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '奥戸新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(33,237,111,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '奥戸村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(33,237,111,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '押上村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(158,4,235,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下鎌田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(243,235,8,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下今井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(243,235,8,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下篠崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(23,179,236,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(23,179,236,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小合村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,17,113,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小松村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(69,248,38,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下千葉村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(69,248,38,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(71,46,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下木下川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(71,46,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '加々皿沼村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,123,28,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '嘉兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(39,238,182,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '花畑村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(39,238,182,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '花又村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,10,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '海辺新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,10,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '葛西川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,241,11,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '蒲原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(9,105,249,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鎌倉新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(9,105,249,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '亀戸村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,45,67,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '亀高村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,45,67,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '亀有村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(14,233,54,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '逆井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(111,1,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '久右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(111,1,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '久左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,183,7,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '宮城村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,183,7,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '興ノ宮村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,242,252,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '興野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,30,168,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '曲金村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,30,168,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '金町村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,243,52,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '隅田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,243,52,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '栗原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(26,41,254,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '桑川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,61,8,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '欠真間村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,61,8,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(16,235,129,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '古千谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(16,235,129,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '五兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,2,231,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '高野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,2,231,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '佐野新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,244,26,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '砂原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(41,167,245,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '砂村新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(41,167,245,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '細田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,38,104,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '笹ヶ崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,38,104,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '四ツ木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(17,237,9,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '寺島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(73,15,234,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '次郎左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(73,15,234,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '治兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,153,48,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鹿骨村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,153,48,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鹿浜新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(15,231,199,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鹿浜村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,35,218,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '篠原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,35,218,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '柴又村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,233,27,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '舎人町':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(144,233,27,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '若宮村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(25,84,232,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '渋江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,52,48,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,52,48,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小岩田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(36,234,95,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小合新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(36,234,95,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小菅村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(158,19,251,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小村井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,216,5,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小台村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,216,5,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小谷野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(19,196,236,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小梅村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(19,196,236,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小名木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,35,151,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '松本村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,231,28,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '沼田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,231,28,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上一色村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(57,46,252,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上鎌田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(57,46,252,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上今井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,111,33,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上篠崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(11,255,166,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(11,255,166,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小合村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,38,254,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小松村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,38,254,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上千葉村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(199,248,37,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(33,128,230,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上木下川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(33,128,230,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '新宿町':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,39,77,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '新堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,39,77,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '深川出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(22,244,44,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '深川本村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(22,244,44,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '須崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(114,37,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西一之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,169,31,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西宇喜田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,169,31,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西小松川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(25,235,228,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西新井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(25,235,228,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西船堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,51,188,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '請地村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(110,249,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '青戸村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(110,249,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '石小田新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(2,40,255,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住一丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(130,245,8,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住五丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(19,196,236,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住三丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,247,222,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住四丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,5,181,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住中組':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(173,7,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住二丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,222,0,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千田新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(241,245,33,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '川端村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(11,180,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '前野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(11,180,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '善左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,43,127,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '太郎兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,43,127,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大谷田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,237,24,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大塚新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(64,23,250,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(64,23,250,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大畑村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,115,1,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大和田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,115,1,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '辰沼新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(16,232,182,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '谷河内村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,44,240,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '谷在家村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,44,240,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '淡ノ須村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,232,38,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '竹塚村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(164,232,38,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中ノ郷出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,120,249,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中ノ郷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,45,59,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,45,59,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,251,65,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中田新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,251,65,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(131,9,245,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(244,200,5,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(244,200,5,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(39,230,251,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '島根村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(39,230,251,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東一之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,26,162,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東宇喜田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,26,162,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東小松川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(110,246,46,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東船堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(7,15,235,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '当代島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(7,15,235,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '内匠新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,72,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '南本所出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,72,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '二之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(34,234,147,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '入谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,19,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '梅田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,19,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '萩新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(203,239,2,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '八右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(203,239,2,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '八郎右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(17,144,241,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '飯塚村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,10,75,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '普賢寺村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,10,75,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '平井新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,253,40,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '平方村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,253,40,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '平柳領領家村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(81,8,252,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '保木間村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,166,49,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '宝木塚村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,166,49,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '北三谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,247,222,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '北本所出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,247,222,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(243,43,206,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀切村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(130,245,8,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀之内村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(130,245,8,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本一色村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(27,79,251,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本行徳村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(27,79,251,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,48,35,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '又兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(14,255,98,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '毛利新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(14,255,98,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '木下村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(174,41,252,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '弥五郎新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(174,41,252,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '柳原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,222,0,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '柳島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(44,200,247,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '立石村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(44,200,247,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '六ツ木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,28,133,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '六間堀出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,28,133,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '六月村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(86,244,51,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(86,244,51,0.2)'}),
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
    
    var labelText = ""; 
    var value = feature.get("村名");
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
