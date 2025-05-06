var size = 0;
var placement = 'point';
function categories_Fill_marge_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '伊興村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(26,231,142,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伊勢屋村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(26,231,142,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伊藤谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,44,230,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伊予田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,44,230,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '一之江新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,249,21,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '永代新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,249,21,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '越中島新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(24,139,234,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '猿ヶ又村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(243,14,75,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '猿江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(243,14,75,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '奥戸新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(41,240,48,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '奥戸村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(41,240,48,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '押上村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(79,6,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下鎌田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,155,9,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下今井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,155,9,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下篠崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(44,233,214,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(44,233,214,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小合村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,27,199,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小松村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(139,244,28,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下千葉村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(139,244,28,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,90,252,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下木下川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,90,252,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '加々皿沼村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,42,23,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '嘉兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(11,246,97,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '花畑村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(11,246,97,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '花又村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(177,48,246,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '海辺新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(177,48,246,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '葛西川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,238,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '蒲原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(5,186,241,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鎌倉新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(5,186,241,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '亀戸村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,42,139,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '亀高村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,42,139,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '亀有村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(46,237,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '逆井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(78,55,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '久右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(78,55,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '久左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,105,1,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '宮城村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,105,1,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '興ノ宮村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(31,251,185,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '興野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,12,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '曲金村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,12,253,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '金町村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(194,253,44,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '隅田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(194,253,44,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '栗原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(44,125,232,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '桑川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,38,69,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '欠真間村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,38,69,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(19,243,53,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '古千谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(19,243,53,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '五兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(129,38,241,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '高野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(129,38,241,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '佐野新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,199,49,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '砂原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(41,232,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '砂村新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(41,232,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '細田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,33,173,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '笹ヶ崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,33,173,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '四ツ木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(121,244,44,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '寺島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(52,71,240,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '次郎左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(52,71,240,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '治兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(241,57,11,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鹿骨村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(241,57,11,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鹿浜新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(40,252,146,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鹿浜村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(196,44,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '篠原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(196,44,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '柴又村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,234,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '舎人町':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,234,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '若宮村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(47,173,246,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '渋江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,35,110,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,59,254,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小岩田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(38,253,27,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小合新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(38,253,27,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小菅村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(58,3,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小村井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,144,24,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小台村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,144,24,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小谷野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(13,247,208,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小梅村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(13,247,208,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小名木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,27,213,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '松本村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(156,234,47,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '沼田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(156,234,47,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上一色村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,96,232,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上鎌田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,96,232,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上今井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,50,50,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上篠崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(2,249,72,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(2,249,72,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小合村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,22,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小松村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,22,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上千葉村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,217,7,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,198,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上木下川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(1,198,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '新宿町':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,26,150,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '新堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,26,150,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '深川出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(83,242,30,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '深川本村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(83,242,30,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '須崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(50,44,242,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西一之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,104,34,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西宇喜田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,104,34,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西小松川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(21,237,154,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西新井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(21,237,154,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西船堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,12,255,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '請地村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(193,238,11,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '青戸村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(193,238,11,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '石小田新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(2,128,254,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住一丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(2,128,254,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住五丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(243,16,65,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住三丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(238,150,56,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住四丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(21,238,40,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住中組':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,240,42,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住二丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(119,49,241,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千田新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,161,3,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '川端村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(30,254,243,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '前野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(30,254,243,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '善左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,20,185,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '太郎兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,20,185,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大谷田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(113,239,2,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大塚新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(12,49,235,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(12,49,235,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大畑村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,79,53,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大和田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,79,53,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '辰沼新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(6,231,100,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '谷河内村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,35,235,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '谷在家村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,35,235,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '淡ノ須村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,233,0,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '竹塚村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,233,0,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中ノ郷出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(21,176,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中ノ郷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,12,106,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,12,106,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(64,245,37,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中田新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(64,245,37,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(70,36,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,133,30,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,133,30,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(35,230,181,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '島根村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(35,230,181,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東一之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,15,242,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東宇喜田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,15,242,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東小松川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(168,237,29,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東船堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(10,98,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '当代島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(10,98,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '内匠新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,13,34,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '南本所出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,13,34,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '二之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(18,242,63,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '入谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(132,22,243,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '梅田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(132,22,243,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '萩新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,210,37,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '八右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,210,37,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '八郎右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(30,217,234,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '飯塚村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(244,6,157,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '普賢寺村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(244,6,157,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '平井新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(79,231,4,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '平方村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(79,231,4,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '平柳領領家村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(14,25,231,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '保木間村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,86,35,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '宝木塚村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,86,35,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '北三谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(7,233,128,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '北本所出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(7,233,128,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,2,250,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀切村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,249,54,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀之内村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,249,54,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本一色村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,139,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本行徳村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,139,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,8,76,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '又兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(34,240,34,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '毛利新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(34,240,34,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '木下村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(82,18,245,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '弥五郎新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,26,28,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '柳原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,255,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '柳島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,254,227,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '立石村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,254,227,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '六ツ木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,2,212,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '六間堀出村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,2,212,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '六月村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,249,8,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,249,8,0.2)'}),
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
