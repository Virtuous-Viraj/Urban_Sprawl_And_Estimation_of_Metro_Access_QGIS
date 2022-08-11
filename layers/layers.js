ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([72.451045, 18.792748, 73.254588, 19.365220]);
var wms_layers = [];

var format_India_Districts_Boundary_0 = new ol.format.GeoJSON();
var features_India_Districts_Boundary_0 = format_India_Districts_Boundary_0.readFeatures(json_India_Districts_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_India_Districts_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_Districts_Boundary_0.addFeatures(features_India_Districts_Boundary_0);
var lyr_India_Districts_Boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_India_Districts_Boundary_0, 
                style: style_India_Districts_Boundary_0,
                interactive: true,
                title: '<img src="styles/legend/India_Districts_Boundary_0.png" /> India_Districts_Boundary'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Urban_Sprawl_raster_Georeferenced_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Urban_Sprawl_raster_Georeferenced",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Urban_Sprawl_raster_Georeferenced_2.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [72.651537, 18.577182, 73.395900, 19.567815]
                            })
                        });
var format_IND_BOMBAY_BORDER_3 = new ol.format.GeoJSON();
var features_IND_BOMBAY_BORDER_3 = format_IND_BOMBAY_BORDER_3.readFeatures(json_IND_BOMBAY_BORDER_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IND_BOMBAY_BORDER_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_BOMBAY_BORDER_3.addFeatures(features_IND_BOMBAY_BORDER_3);
var lyr_IND_BOMBAY_BORDER_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IND_BOMBAY_BORDER_3, 
                style: style_IND_BOMBAY_BORDER_3,
                interactive: true,
                title: '<img src="styles/legend/IND_BOMBAY_BORDER_3.png" /> IND_BOMBAY_BORDER'
            });
var lyr_ind_pd_2020_1km_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "ind_pd_2020_1km",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ind_pd_2020_1km_4.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [68.182083, 6.749583, 97.415416, 35.507917]
                            })
                        });
var format_Ind_BOMBAY_datapoints_5 = new ol.format.GeoJSON();
var features_Ind_BOMBAY_datapoints_5 = format_Ind_BOMBAY_datapoints_5.readFeatures(json_Ind_BOMBAY_datapoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Ind_BOMBAY_datapoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ind_BOMBAY_datapoints_5.addFeatures(features_Ind_BOMBAY_datapoints_5);
var lyr_Ind_BOMBAY_datapoints_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ind_BOMBAY_datapoints_5, 
                style: style_Ind_BOMBAY_datapoints_5,
                interactive: true,
    title: 'Ind_BOMBAY_datapoints<br />\
    <img src="styles/legend/Ind_BOMBAY_datapoints_5_0.png" /> Operational from<br />\
    <img src="styles/legend/Ind_BOMBAY_datapoints_5_1.png" /> Operational from 02-04-2022<br />\
    <img src="styles/legend/Ind_BOMBAY_datapoints_5_2.png" /> Operational from 08-06-2014<br />\
    <img src="styles/legend/Ind_BOMBAY_datapoints_5_3.png" /> Under construction<br />'
        });
var format_Buffered_Layer_2km_6 = new ol.format.GeoJSON();
var features_Buffered_Layer_2km_6 = format_Buffered_Layer_2km_6.readFeatures(json_Buffered_Layer_2km_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffered_Layer_2km_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_Layer_2km_6.addFeatures(features_Buffered_Layer_2km_6);
var lyr_Buffered_Layer_2km_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_Layer_2km_6, 
                style: style_Buffered_Layer_2km_6,
                interactive: false,
                title: '<img src="styles/legend/Buffered_Layer_2km_6.png" /> Buffered_Layer_2km'
            });
var format_IND_BOMBAY_7 = new ol.format.GeoJSON();
var features_IND_BOMBAY_7 = format_IND_BOMBAY_7.readFeatures(json_IND_BOMBAY_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IND_BOMBAY_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_BOMBAY_7.addFeatures(features_IND_BOMBAY_7);
var lyr_IND_BOMBAY_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IND_BOMBAY_7, 
                style: style_IND_BOMBAY_7,
                interactive: false,
                title: '<img src="styles/legend/IND_BOMBAY_7.png" /> IND_BOMBAY'
            });
var format_Mumbai_OverAll_Population_8 = new ol.format.GeoJSON();
var features_Mumbai_OverAll_Population_8 = format_Mumbai_OverAll_Population_8.readFeatures(json_Mumbai_OverAll_Population_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mumbai_OverAll_Population_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mumbai_OverAll_Population_8.addFeatures(features_Mumbai_OverAll_Population_8);
var lyr_Mumbai_OverAll_Population_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mumbai_OverAll_Population_8, 
                style: style_Mumbai_OverAll_Population_8,
                interactive: true,
                title: '<img src="styles/legend/Mumbai_OverAll_Population_8.png" /> Mumbai_OverAll_Population'
            });
var format_Mumbai_Overlapping_Population_9 = new ol.format.GeoJSON();
var features_Mumbai_Overlapping_Population_9 = format_Mumbai_Overlapping_Population_9.readFeatures(json_Mumbai_Overlapping_Population_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mumbai_Overlapping_Population_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mumbai_Overlapping_Population_9.addFeatures(features_Mumbai_Overlapping_Population_9);
var lyr_Mumbai_Overlapping_Population_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mumbai_Overlapping_Population_9, 
                style: style_Mumbai_Overlapping_Population_9,
                interactive: true,
                title: '<img src="styles/legend/Mumbai_Overlapping_Population_9.png" /> Mumbai_Overlapping_Population'
            });
var format_Mumbai_pop_sum_near2kmMetro_10 = new ol.format.GeoJSON();
var features_Mumbai_pop_sum_near2kmMetro_10 = format_Mumbai_pop_sum_near2kmMetro_10.readFeatures(json_Mumbai_pop_sum_near2kmMetro_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mumbai_pop_sum_near2kmMetro_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mumbai_pop_sum_near2kmMetro_10.addFeatures(features_Mumbai_pop_sum_near2kmMetro_10);
var lyr_Mumbai_pop_sum_near2kmMetro_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mumbai_pop_sum_near2kmMetro_10, 
                style: style_Mumbai_pop_sum_near2kmMetro_10,
                interactive: true,
                title: '<img src="styles/legend/Mumbai_pop_sum_near2kmMetro_10.png" /> Mumbai_pop_sum_near2kmMetro'
            });

lyr_India_Districts_Boundary_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Urban_Sprawl_raster_Georeferenced_2.setVisible(false);lyr_IND_BOMBAY_BORDER_3.setVisible(true);lyr_ind_pd_2020_1km_4.setVisible(false);lyr_Ind_BOMBAY_datapoints_5.setVisible(true);lyr_Buffered_Layer_2km_6.setVisible(true);lyr_IND_BOMBAY_7.setVisible(true);lyr_Mumbai_OverAll_Population_8.setVisible(true);lyr_Mumbai_Overlapping_Population_9.setVisible(true);lyr_Mumbai_pop_sum_near2kmMetro_10.setVisible(true);
var layersList = [lyr_India_Districts_Boundary_0,lyr_OpenStreetMap_1,lyr_Urban_Sprawl_raster_Georeferenced_2,lyr_IND_BOMBAY_BORDER_3,lyr_ind_pd_2020_1km_4,lyr_Ind_BOMBAY_datapoints_5,lyr_Buffered_Layer_2km_6,lyr_IND_BOMBAY_7,lyr_Mumbai_OverAll_Population_8,lyr_Mumbai_Overlapping_Population_9,lyr_Mumbai_pop_sum_near2kmMetro_10];
lyr_India_Districts_Boundary_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_IND_BOMBAY_BORDER_3.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Ind_BOMBAY_datapoints_5.set('fieldAliases', {'Station Na': 'Station Na', 'Line': 'Line', 'Layout': 'Layout', 'Platform L': 'Platform L', 'Status': 'Status', 'Notes': 'Notes', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Buffered_Layer_2km_6.set('fieldAliases', {'Station Na': 'Station Na', 'Line': 'Line', 'Layout': 'Layout', 'Platform L': 'Platform L', 'Status': 'Status', 'Notes': 'Notes', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_IND_BOMBAY_7.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Mumbai_OverAll_Population_8.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'OVERALLPOP': 'OVERALLPOP', });
lyr_Mumbai_Overlapping_Population_9.set('fieldAliases', {'Station Na': 'Station Na', 'Line': 'Line', 'Layout': 'Layout', 'Platform L': 'Platform L', 'Status': 'Status', 'Notes': 'Notes', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'population': 'population', });
lyr_Mumbai_pop_sum_near2kmMetro_10.set('fieldAliases', {'id': 'id', 'GreaterBom': 'GreaterBom', });
lyr_India_Districts_Boundary_0.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'ID_2': '', 'NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'NL_NAME_2': '', 'VARNAME_2': '', });
lyr_IND_BOMBAY_BORDER_3.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Ind_BOMBAY_datapoints_5.set('fieldImages', {'Station Na': 'TextEdit', 'Line': 'TextEdit', 'Layout': 'TextEdit', 'Platform L': 'TextEdit', 'Status': 'TextEdit', 'Notes': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Buffered_Layer_2km_6.set('fieldImages', {'Station Na': '', 'Line': '', 'Layout': '', 'Platform L': '', 'Status': '', 'Notes': '', 'Latitude': '', 'Longitude': '', });
lyr_IND_BOMBAY_7.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Mumbai_OverAll_Population_8.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'OVERALLPOP': 'TextEdit', });
lyr_Mumbai_Overlapping_Population_9.set('fieldImages', {'Station Na': '', 'Line': '', 'Layout': '', 'Platform L': '', 'Status': '', 'Notes': '', 'Latitude': '', 'Longitude': '', 'population': '', });
lyr_Mumbai_pop_sum_near2kmMetro_10.set('fieldImages', {'id': '', 'GreaterBom': '', });
lyr_India_Districts_Boundary_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_IND_BOMBAY_BORDER_3.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Ind_BOMBAY_datapoints_5.set('fieldLabels', {'Station Na': 'no label', 'Line': 'no label', 'Layout': 'no label', 'Platform L': 'no label', 'Status': 'no label', 'Notes': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Buffered_Layer_2km_6.set('fieldLabels', {'Station Na': 'no label', 'Line': 'no label', 'Layout': 'no label', 'Platform L': 'no label', 'Status': 'no label', 'Notes': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_IND_BOMBAY_7.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Mumbai_OverAll_Population_8.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'OVERALLPOP': 'no label', });
lyr_Mumbai_Overlapping_Population_9.set('fieldLabels', {'Station Na': 'no label', 'Line': 'no label', 'Layout': 'no label', 'Platform L': 'no label', 'Status': 'no label', 'Notes': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'population': 'no label', });
lyr_Mumbai_pop_sum_near2kmMetro_10.set('fieldLabels', {'id': 'no label', 'GreaterBom': 'no label', });
lyr_Mumbai_pop_sum_near2kmMetro_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});