var size = 0;
var placement = 'point';
function categories_Fill_marge_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '伊勢屋村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(226,145,91,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伊予田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(173,62,233,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '一之江新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(206,16,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下鎌田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(97,229,143,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下今井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,126,150,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下篠崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(180,223,62,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(138,225,45,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下小松村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,155,233,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,12,200,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下木下川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,182,239,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '嘉兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(207,227,94,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '花又村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,176,62,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鎌倉新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(168,103,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '逆井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(76,217,69,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '久右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(207,96,217,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '久左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(177,213,99,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '興ノ宮村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(159,231,59,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '隅田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(36,217,90,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '桑川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(219,183,112,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '欠真間村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(13,87,215,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(154,95,206,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '佐野新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,105,234,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '笹ヶ崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(52,61,237,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '四ツ木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,53,37,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '鹿骨村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(123,219,78,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '篠原':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,212,205,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '篠原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,47,21,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '若宮村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(186,61,227,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '渋江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(163,89,217,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小岩田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(213,213,36,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '松本村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(155,218,118,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上一色村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(217,205,117,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上鎌田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(42,202,106,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上今井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(124,214,126,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上篠崎村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(184,57,238,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(15,134,203,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上小松村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(72,173,207,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,200,77,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上木下川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(214,30,131,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '新堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,172,108,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西一之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(49,27,219,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西宇喜田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(72,217,89,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西小松川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(216,100,102,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西船堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(219,21,120,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '青戸村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(121,115,229,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '川端村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(101,229,199,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '前野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,146,57,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '善左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(199,88,227,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大谷田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,91,137,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大畑村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,108,128,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '大和田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(31,205,118,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '辰沼新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,235,136,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '谷河内村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(111,20,230,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '淡ノ須村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,188,118,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(26,211,231,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中小岩村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,196,212,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '中平井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(38,204,132,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(104,223,65,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,142,35,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '長島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,210,126,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東一之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,115,202,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東宇喜田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,131,204,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東小松川村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,72,167,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '東船堀村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,84,147,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '当代島村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,206,194,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '内匠新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,35,58,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '二之江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(15,218,215,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '梅田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,97,33,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '宝木塚村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(216,124,199,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀江村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,116,22,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '堀切村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,233,179,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本一色村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,169,228,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本行徳村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(118,215,178,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '木下村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,90,135,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '立石村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(98,215,14,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '六ツ木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(113,126,204,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '奥戸新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,31,188,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '奥戸村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(114,214,217,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '曲金村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,125,185,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '細田村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(38,200,73,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '柴又村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,59,211,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小谷野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(44,79,206,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '新宿町':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(79,239,39,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小菅村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,221,20,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '上千葉村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,54,233,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '下千葉村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(87,30,211,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '亀有村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(126,73,213,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '柳原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,202,181,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '砂原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(119,83,217,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '普賢寺村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(129,187,212,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '蒲原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(47,98,236,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '北三谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,122,118,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '伊藤谷村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,106,59,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '花畑村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,235,27,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '興野村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(72,188,217,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '栗原村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,57,67,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '五兵衛新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(235,91,55,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '次郎左衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(34,34,222,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '小右衛門新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(92,231,185,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '西新井村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(44,222,171,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住五丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,123,176,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住三丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(201,63,17,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住四丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(165,214,80,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '千住二丁目':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,154,211,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '竹塚村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(217,234,62,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '島根村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(124,163,205,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '保木間村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(121,99,201,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '本木村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(107,227,85,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '弥五郎新田':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,121,143,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '六月村':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,211,123,0.2)'}),
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
