var wms_layers = [];

var format_denemeee111111111_0 = new ol.format.GeoJSON();
var features_denemeee111111111_0 = format_denemeee111111111_0.readFeatures(json_denemeee111111111_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_denemeee111111111_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_denemeee111111111_0.addFeatures(features_denemeee111111111_0);
var lyr_denemeee111111111_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_denemeee111111111_0, 
                style: style_denemeee111111111_0,
                popuplayertitle: 'denemeee111111111',
                interactive: true,
    title: 'denemeee111111111<br />\
    <img src="styles/legend/denemeee111111111_0_0.png" /> A<br />\
    <img src="styles/legend/denemeee111111111_0_1.png" /> AGC<br />\
    <img src="styles/legend/denemeee111111111_0_2.png" /> B2<br />\
    <img src="styles/legend/denemeee111111111_0_3.png" /> C<br />\
    <img src="styles/legend/denemeee111111111_0_4.png" /> CK<br />\
    <img src="styles/legend/denemeee111111111_0_5.png" /> CLL<br />\
    <img src="styles/legend/denemeee111111111_0_6.png" /> DGR<br />\
    <img src="styles/legend/denemeee111111111_0_7.png" /> DT<br />\
    <img src="styles/legend/denemeee111111111_0_8.png" /> DTF<br />\
    <img src="styles/legend/denemeee111111111_0_9.png" /> DTM<br />\
    <img src="styles/legend/denemeee111111111_0_10.png" /> DVL<br />\
    <img src="styles/legend/denemeee111111111_0_11.png" /> G<br />\
    <img src="styles/legend/denemeee111111111_0_12.png" /> KMT<br />\
    <img src="styles/legend/denemeee111111111_0_13.png" /> KOR<br />\
    <img src="styles/legend/denemeee111111111_0_14.png" /> KOT<br />\
    <img src="styles/legend/denemeee111111111_0_15.png" /> KTA<br />\
    <img src="styles/legend/denemeee111111111_0_16.png" /> M<br />\
    <img src="styles/legend/denemeee111111111_0_17.png" /> MEZ<br />\
    <img src="styles/legend/denemeee111111111_0_18.png" /> MO<br />\
    <img src="styles/legend/denemeee111111111_0_19.png" /> O<br />\
    <img src="styles/legend/denemeee111111111_0_20.png" /> OT<br />\
    <img src="styles/legend/denemeee111111111_0_21.png" /> SA<br />\
    <img src="styles/legend/denemeee111111111_0_22.png" /> SDT<br />\
    <img src="styles/legend/denemeee111111111_0_23.png" /> SK<br />\
    <img src="styles/legend/denemeee111111111_0_24.png" /> SMT<br />\
    <img src="styles/legend/denemeee111111111_0_25.png" /> SOT<br />\
    <img src="styles/legend/denemeee111111111_0_26.png" /> STA<br />\
    <img src="styles/legend/denemeee111111111_0_27.png" /> TD<br />\
    <img src="styles/legend/denemeee111111111_0_28.png" /> TRM<br />\
    <img src="styles/legend/denemeee111111111_0_29.png" /> Y<br />\
    <img src="styles/legend/denemeee111111111_0_30.png" /> <br />' });

lyr_denemeee111111111_0.setVisible(true);
var layersList = [lyr_denemeee111111111_0];
lyr_denemeee111111111_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'TIM_SAK': 'TIM_SAK', 'Shape_Leng': 'Shape_Leng', 'USTSINIF': 'USTSINIF', 'AD_1': 'AD_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'ACIKLAMA': 'ACIKLAMA', 'AÇIKLAMA2': 'AÇIKLAMA2', 'AÇIKLAMA3': 'AÇIKLAMA3', 'AÇIKLAMA4': 'AÇIKLAMA4', 'ACIKLAMA_5': 'ACIKLAMA_5', 'hesap_alan': 'hesap_alan', });
lyr_denemeee111111111_0.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIM_SAK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'USTSINIF': 'TextEdit', 'AD_1': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'ACIKLAMA': 'TextEdit', 'AÇIKLAMA2': 'TextEdit', 'AÇIKLAMA3': 'TextEdit', 'AÇIKLAMA4': 'TextEdit', 'ACIKLAMA_5': 'TextEdit', 'hesap_alan': 'TextEdit', });
lyr_denemeee111111111_0.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'TIM_SAK': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'USTSINIF': 'inline label - always visible', 'AD_1': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'inline label - always visible', 'ACIKLAMA': 'inline label - always visible', 'AÇIKLAMA2': 'inline label - always visible', 'AÇIKLAMA3': 'inline label - always visible', 'AÇIKLAMA4': 'inline label - always visible', 'ACIKLAMA_5': 'no label', 'hesap_alan': 'inline label - always visible', });
lyr_denemeee111111111_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});