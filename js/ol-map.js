// OpenLayers Harita örneği
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM() // OpenStreetMap katmanı
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([32.73185, 39.87009]), // Ankara koordinatları
    zoom: 12
  })
});
