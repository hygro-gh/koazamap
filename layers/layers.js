var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院淡色地図',
            'type':'base',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'
            })
        });
var format_kasairiai_3_1 = new ol.format.GeoJSON();
var features_kasairiai_3_1 = format_kasairiai_3_1.readFeatures(json_kasairiai_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kasairiai_3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kasairiai_3_1.addFeatures(features_kasairiai_3_1);
var lyr_kasairiai_3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kasairiai_3_1, 
                style: style_kasairiai_3_1,
                popuplayertitle: 'kasairiai_3',
                interactive: false,
    title: 'kasairiai_3<br />\
    <img src="styles/legend/kasairiai_3_1_0.png" /> 東宇喜田<br />\
    <img src="styles/legend/kasairiai_3_1_1.png" /> 長島<br />\
    <img src="styles/legend/kasairiai_3_1_2.png" /> 堀江<br />\
    <img src="styles/legend/kasairiai_3_1_3.png" /> 二之江<br />\
    <img src="styles/legend/kasairiai_3_1_4.png" /> 桑川<br />\
    <img src="styles/legend/kasairiai_3_1_5.png" /> 下今井<br />\
    <img src="styles/legend/kasairiai_3_1_6.png" /> <br />' });
var format_kasairiai_2_2 = new ol.format.GeoJSON();
var features_kasairiai_2_2 = format_kasairiai_2_2.readFeatures(json_kasairiai_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kasairiai_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kasairiai_2_2.addFeatures(features_kasairiai_2_2);
var lyr_kasairiai_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kasairiai_2_2, 
                style: style_kasairiai_2_2,
                popuplayertitle: 'kasairiai_2',
                interactive: false,
                title: '<img src="styles/legend/kasairiai_2_2.png" /> kasairiai_2'
            });
var format_kasairiai_1_3 = new ol.format.GeoJSON();
var features_kasairiai_1_3 = format_kasairiai_1_3.readFeatures(json_kasairiai_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kasairiai_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kasairiai_1_3.addFeatures(features_kasairiai_1_3);
var lyr_kasairiai_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kasairiai_1_3, 
                style: style_kasairiai_1_3,
                popuplayertitle: 'kasairiai_1',
                interactive: false,
                title: '<img src="styles/legend/kasairiai_1_3.png" /> kasairiai_1'
            });
var format_Fill_marge_4 = new ol.format.GeoJSON();
var features_Fill_marge_4 = format_Fill_marge_4.readFeatures(json_Fill_marge_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fill_marge_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fill_marge_4.addFeatures(features_Fill_marge_4);
var lyr_Fill_marge_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fill_marge_4, 
                style: style_Fill_marge_4,
                popuplayertitle: 'Fill_marge',
                interactive: false,
    title: 'Fill_marge<br />\
    <img src="styles/legend/Fill_marge_4_0.png" /> 六月村<br />\
    <img src="styles/legend/Fill_marge_4_1.png" /> 六ツ木村<br />\
    <img src="styles/legend/Fill_marge_4_2.png" /> 立石村<br />\
    <img src="styles/legend/Fill_marge_4_3.png" /> 柳原村<br />\
    <img src="styles/legend/Fill_marge_4_4.png" /> 弥五郎新田<br />\
    <img src="styles/legend/Fill_marge_4_5.png" /> 本木村<br />\
    <img src="styles/legend/Fill_marge_4_6.png" /> 木下村<br />\
    <img src="styles/legend/Fill_marge_4_7.png" /> 本行徳村<br />\
    <img src="styles/legend/Fill_marge_4_8.png" /> 本一色村<br />\
    <img src="styles/legend/Fill_marge_4_9.png" /> 堀切村<br />\
    <img src="styles/legend/Fill_marge_4_10.png" /> 堀之内村<br />\
    <img src="styles/legend/Fill_marge_4_11.png" /> 堀江村<br />\
    <img src="styles/legend/Fill_marge_4_12.png" /> 北三谷村<br />\
    <img src="styles/legend/Fill_marge_4_13.png" /> 宝木塚村<br />\
    <img src="styles/legend/Fill_marge_4_14.png" /> 平柳領領家村<br />\
    <img src="styles/legend/Fill_marge_4_15.png" /> 保木間村<br />\
    <img src="styles/legend/Fill_marge_4_16.png" /> 普賢寺村<br />\
    <img src="styles/legend/Fill_marge_4_17.png" /> 入谷村<br />\
    <img src="styles/legend/Fill_marge_4_18.png" /> 梅田村<br />\
    <img src="styles/legend/Fill_marge_4_19.png" /> 二之江村<br />\
    <img src="styles/legend/Fill_marge_4_20.png" /> 内匠新田<br />\
    <img src="styles/legend/Fill_marge_4_21.png" /> 当代島村<br />\
    <img src="styles/legend/Fill_marge_4_22.png" /> 東船堀村<br />\
    <img src="styles/legend/Fill_marge_4_23.png" /> 東宇喜田村<br />\
    <img src="styles/legend/Fill_marge_4_24.png" /> 東小松川村<br />\
    <img src="styles/legend/Fill_marge_4_25.png" /> 東一之江村<br />\
    <img src="styles/legend/Fill_marge_4_26.png" /> 長島村<br />\
    <img src="styles/legend/Fill_marge_4_27.png" /> 島根村<br />\
    <img src="styles/legend/Fill_marge_4_28.png" /> 長左衛門新田<br />\
    <img src="styles/legend/Fill_marge_4_29.png" /> 長右衛門新田<br />\
    <img src="styles/legend/Fill_marge_4_30.png" /> 中平井村<br />\
    <img src="styles/legend/Fill_marge_4_31.png" /> 中之郷村<br />\
    <img src="styles/legend/Fill_marge_4_32.png" /> 中小岩村<br />\
    <img src="styles/legend/Fill_marge_4_33.png" /> 竹塚村<br />\
    <img src="styles/legend/Fill_marge_4_34.png" /> 中原村<br />\
    <img src="styles/legend/Fill_marge_4_35.png" /> 淡ノ須村<br />\
    <img src="styles/legend/Fill_marge_4_36.png" /> 谷在家村<br />\
    <img src="styles/legend/Fill_marge_4_37.png" /> 谷河内村<br />\
    <img src="styles/legend/Fill_marge_4_38.png" /> 辰沼新田<br />\
    <img src="styles/legend/Fill_marge_4_39.png" /> 大畑村<br />\
    <img src="styles/legend/Fill_marge_4_40.png" /> 大和田村<br />\
    <img src="styles/legend/Fill_marge_4_41.png" /> 大谷田村<br />\
    <img src="styles/legend/Fill_marge_4_42.png" /> 善左衛門新田<br />\
    <img src="styles/legend/Fill_marge_4_43.png" /> 川端村<br />\
    <img src="styles/legend/Fill_marge_4_44.png" /> 前野村<br />\
    <img src="styles/legend/Fill_marge_4_45.png" /> 千住二丁目<br />\
    <img src="styles/legend/Fill_marge_4_46.png" /> 千住四丁目<br />\
    <img src="styles/legend/Fill_marge_4_47.png" /> 千住三丁目<br />\
    <img src="styles/legend/Fill_marge_4_48.png" /> 千住五丁目<br />\
    <img src="styles/legend/Fill_marge_4_49.png" /> 青戸村<br />\
    <img src="styles/legend/Fill_marge_4_50.png" /> 西船堀村<br />\
    <img src="styles/legend/Fill_marge_4_51.png" /> 請地村<br />\
    <img src="styles/legend/Fill_marge_4_52.png" /> 西新井村<br />\
    <img src="styles/legend/Fill_marge_4_53.png" /> 西小松川村<br />\
    <img src="styles/legend/Fill_marge_4_54.png" /> 西宇喜田村<br />\
    <img src="styles/legend/Fill_marge_4_55.png" /> 西一之江村<br />\
    <img src="styles/legend/Fill_marge_4_56.png" /> 新堀村<br />\
    <img src="styles/legend/Fill_marge_4_57.png" /> 須崎村<br />\
    <img src="styles/legend/Fill_marge_4_58.png" /> 新宿町<br />\
    <img src="styles/legend/Fill_marge_4_59.png" /> 上平井村<br />\
    <img src="styles/legend/Fill_marge_4_60.png" /> 上木下川村<br />\
    <img src="styles/legend/Fill_marge_4_61.png" /> 上千葉村<br />\
    <img src="styles/legend/Fill_marge_4_62.png" /> 上小松村<br />\
    <img src="styles/legend/Fill_marge_4_63.png" /> 上小岩村<br />\
    <img src="styles/legend/Fill_marge_4_64.png" /> 上篠崎村<br />\
    <img src="styles/legend/Fill_marge_4_65.png" /> 上鎌田村<br />\
    <img src="styles/legend/Fill_marge_4_66.png" /> 上今井村<br />\
    <img src="styles/legend/Fill_marge_4_67.png" /> 上一色村<br />\
    <img src="styles/legend/Fill_marge_4_68.png" /> 沼田村<br />\
    <img src="styles/legend/Fill_marge_4_69.png" /> 松本村<br />\
    <img src="styles/legend/Fill_marge_4_70.png" /> 小谷野村<br />\
    <img src="styles/legend/Fill_marge_4_71.png" /> 小村井村<br />\
    <img src="styles/legend/Fill_marge_4_72.png" /> 小台村<br />\
    <img src="styles/legend/Fill_marge_4_73.png" /> 小菅村<br />\
    <img src="styles/legend/Fill_marge_4_74.png" /> 小岩田村<br />\
    <img src="styles/legend/Fill_marge_4_75.png" /> 渋江村<br />\
    <img src="styles/legend/Fill_marge_4_76.png" /> 小右衛門新田<br />\
    <img src="styles/legend/Fill_marge_4_77.png" /> 若宮村<br />\
    <img src="styles/legend/Fill_marge_4_78.png" /> 舎人町<br />\
    <img src="styles/legend/Fill_marge_4_79.png" /> 柴又村<br />\
    <img src="styles/legend/Fill_marge_4_80.png" /> 鹿浜村<br />\
    <img src="styles/legend/Fill_marge_4_81.png" /> 篠原村<br />\
    <img src="styles/legend/Fill_marge_4_82.png" /> 鹿浜新田<br />\
    <img src="styles/legend/Fill_marge_4_83.png" /> 次郎左衛門新田<br />\
    <img src="styles/legend/Fill_marge_4_84.png" /> 鹿骨村<br />\
    <img src="styles/legend/Fill_marge_4_85.png" /> 寺島村<br />\
    <img src="styles/legend/Fill_marge_4_86.png" /> 四ツ木村<br />\
    <img src="styles/legend/Fill_marge_4_87.png" /> 笹ヶ崎村<br />\
    <img src="styles/legend/Fill_marge_4_88.png" /> 細田村<br />\
    <img src="styles/legend/Fill_marge_4_89.png" /> 佐野新田<br />\
    <img src="styles/legend/Fill_marge_4_90.png" /> 砂原村<br />\
    <img src="styles/legend/Fill_marge_4_91.png" /> 高野村<br />\
    <img src="styles/legend/Fill_marge_4_92.png" /> 古千谷村<br />\
    <img src="styles/legend/Fill_marge_4_93.png" /> 五兵衛新田<br />\
    <img src="styles/legend/Fill_marge_4_94.png" /> 原村<br />\
    <img src="styles/legend/Fill_marge_4_95.png" /> 欠真間村<br />\
    <img src="styles/legend/Fill_marge_4_96.png" /> 桑川村<br />\
    <img src="styles/legend/Fill_marge_4_97.png" /> 栗原村<br />\
    <img src="styles/legend/Fill_marge_4_98.png" /> 曲金村<br />\
    <img src="styles/legend/Fill_marge_4_99.png" /> 隅田村<br />\
    <img src="styles/legend/Fill_marge_4_100.png" /> 興野村<br />\
    <img src="styles/legend/Fill_marge_4_101.png" /> 興ノ宮村<br />\
    <img src="styles/legend/Fill_marge_4_102.png" /> 宮城村<br />\
    <img src="styles/legend/Fill_marge_4_103.png" /> 久左衛門新田<br />\
    <img src="styles/legend/Fill_marge_4_104.png" /> 逆井村<br />\
    <img src="styles/legend/Fill_marge_4_105.png" /> 久右衛門新田<br />\
    <img src="styles/legend/Fill_marge_4_106.png" /> 亀有村<br />\
    <img src="styles/legend/Fill_marge_4_107.png" /> 鎌倉新田<br />\
    <img src="styles/legend/Fill_marge_4_108.png" /> 葛西川村<br />\
    <img src="styles/legend/Fill_marge_4_109.png" /> 蒲原村<br />\
    <img src="styles/legend/Fill_marge_4_110.png" /> 花又村<br />\
    <img src="styles/legend/Fill_marge_4_111.png" /> 花畑村<br />\
    <img src="styles/legend/Fill_marge_4_112.png" /> 嘉兵衛新田<br />\
    <img src="styles/legend/Fill_marge_4_113.png" /> 加々皿沼村<br />\
    <img src="styles/legend/Fill_marge_4_114.png" /> 下木下川村<br />\
    <img src="styles/legend/Fill_marge_4_115.png" /> 下千葉村<br />\
    <img src="styles/legend/Fill_marge_4_116.png" /> 下平井村<br />\
    <img src="styles/legend/Fill_marge_4_117.png" /> 下小松村<br />\
    <img src="styles/legend/Fill_marge_4_118.png" /> 下小岩村<br />\
    <img src="styles/legend/Fill_marge_4_119.png" /> 下篠崎村<br />\
    <img src="styles/legend/Fill_marge_4_120.png" /> 下鎌田村<br />\
    <img src="styles/legend/Fill_marge_4_121.png" /> 下今井村<br />\
    <img src="styles/legend/Fill_marge_4_122.png" /> 奥戸村<br />\
    <img src="styles/legend/Fill_marge_4_123.png" /> 一之江新田<br />\
    <img src="styles/legend/Fill_marge_4_124.png" /> 奥戸新田<br />\
    <img src="styles/legend/Fill_marge_4_125.png" /> 伊予田村<br />\
    <img src="styles/legend/Fill_marge_4_126.png" /> 伊藤谷村<br />\
    <img src="styles/legend/Fill_marge_4_127.png" /> 伊勢屋村<br />\
    <img src="styles/legend/Fill_marge_4_128.png" /> 伊興村<br />' });
var format_Koaza_marge_5 = new ol.format.GeoJSON();
var features_Koaza_marge_5 = format_Koaza_marge_5.readFeatures(json_Koaza_marge_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Koaza_marge_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koaza_marge_5.addFeatures(features_Koaza_marge_5);
var lyr_Koaza_marge_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Koaza_marge_5, 
                style: style_Koaza_marge_5,
                popuplayertitle: 'Koaza_marge',
                interactive: false,
                title: '<img src="styles/legend/Koaza_marge_5.png" /> Koaza_marge'
            });
var format_Villege_marge_6 = new ol.format.GeoJSON();
var features_Villege_marge_6 = format_Villege_marge_6.readFeatures(json_Villege_marge_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villege_marge_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villege_marge_6.addFeatures(features_Villege_marge_6);
var lyr_Villege_marge_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villege_marge_6, 
                style: style_Villege_marge_6,
                popuplayertitle: 'Villege_marge',
                interactive: false,
                title: '<img src="styles/legend/Villege_marge_6.png" /> Villege_marge'
            });

lyr__0.setVisible(true);lyr_kasairiai_3_1.setVisible(true);lyr_kasairiai_2_2.setVisible(true);lyr_kasairiai_1_3.setVisible(true);lyr_Fill_marge_4.setVisible(true);lyr_Koaza_marge_5.setVisible(true);lyr_Villege_marge_6.setVisible(true);
var layersList = [lyr__0,lyr_kasairiai_3_1,lyr_kasairiai_2_2,lyr_kasairiai_1_3,lyr_Fill_marge_4,lyr_Koaza_marge_5,lyr_Villege_marge_6];
lyr_kasairiai_3_1.set('fieldAliases', {'id': 'id', '村名': '村名', });
lyr_kasairiai_2_2.set('fieldAliases', {'id': 'id', '村名': '村名', });
lyr_kasairiai_1_3.set('fieldAliases', {'id': 'id', '字名': '字名', });
lyr_Fill_marge_4.set('fieldAliases', {'id': 'id', '村名': '村名', 'layer': 'layer', 'path': 'path', });
lyr_Koaza_marge_5.set('fieldAliases', {'id': 'id', '字名': '字名', 'layer': 'layer', 'path': 'path', });
lyr_Villege_marge_6.set('fieldAliases', {'id': 'id', '村名': '村名', 'layer': 'layer', 'path': 'path', });
lyr_kasairiai_3_1.set('fieldImages', {'id': 'TextEdit', '村名': 'TextEdit', });
lyr_kasairiai_2_2.set('fieldImages', {'id': 'TextEdit', '村名': 'TextEdit', });
lyr_kasairiai_1_3.set('fieldImages', {'id': 'TextEdit', '字名': 'TextEdit', });
lyr_Fill_marge_4.set('fieldImages', {'id': 'TextEdit', '村名': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Koaza_marge_5.set('fieldImages', {'id': 'TextEdit', '字名': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Villege_marge_6.set('fieldImages', {'id': 'TextEdit', '村名': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_kasairiai_3_1.set('fieldLabels', {'id': 'no label', '村名': 'no label', });
lyr_kasairiai_2_2.set('fieldLabels', {'id': 'no label', '村名': 'no label', });
lyr_kasairiai_1_3.set('fieldLabels', {'id': 'no label', '字名': 'no label', });
lyr_Fill_marge_4.set('fieldLabels', {'id': 'no label', '村名': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Koaza_marge_5.set('fieldLabels', {'id': 'no label', '字名': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Villege_marge_6.set('fieldLabels', {'id': 'no label', '村名': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Villege_marge_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});