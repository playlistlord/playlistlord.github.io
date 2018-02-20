$(document).ready(function(){

var mbAttr = '' +
		'' +
		'',
mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
	streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
	
var cities = L.layerGroup();

var mymap = L.map('mapid', {
		center: [55.774226009, 49.12510345],
		zoom: 13,
		zoomControl:false,
		layers: [grayscale, cities]
});
mymap.attributionControl.setPrefix('');
//Разработка сервиса графического отображения карты покрытия сети на сервере инфостат
/*
var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var osm2 = new L.TileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png');
var yndx1 = new L.Yandex('yandex#map');
var yndx2 = new L.Yandex('yandex#satellite');
var yndx3 = new L.Yandex('yandex#hybrid');
var osm_bw = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png');
var maps={
	'Пустой': L.tileLayer(''),
	'OSM':osm,
	'OSM ЧБ':osm2,
	"OSM серая":osm_bw,
	"Yandex Спутник":yndx2,
	"Yandex Схема":yndx1,
	"Yandex Гибрид":yndx3
};
//layerControl =L.control.layers(maps).addTo(mymap);
*/
/*
var controlZoomvar = new L.Control.Search({
	position:'topleft'		
});
mymap.addControl( controlZoomvar );
L.Control.measureControl().addTo(mymap);
*/
var baseLayers = {
	"Grayscale": grayscale,
	"Streets": streets
};

var overlays = {
	"Cities": cities
};

//L.control.layers(baseLayers, overlays).addTo(mymap);

mymap.addControl(new L.Control.Scale({imperial:false,position: 'bottomright'}));
mymap.addControl(new L.Control.Zoom({
	imperial:false,
	zoomInText: 'ближе',
	zoomInTitle: 'это не должно работать' , 
	zoomOutTitle: 'это должно работать', 
	zoomOutText: 'дальше', 
	position: 'bottomleft'
}));

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: ' ' +
		' ' +
		'',
	id: 'mapbox.streets'
}).addTo(mymap);


var circle = L.circle([55.782226009, 49.12710345], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.1,
		radius: 10
}).addTo(mymap);


var polygon1 = L.polygon([
		[55.774226009, 49.12510345],
	[55.774226009, 49.13910345],
	[55.782226009, 49.12710345]
	],
	{color: 'red', stroke:false}
).addTo(mymap);
polygon1.bindPopup("PS_DATA_VOL 1150,919 DL_AVG_THR 11529,5");
function shine(e) {color: 'black'}
polygon1.on('mouseover', shine);



var circle1896 = L.circle([55.79370891, 49.10700706], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.1,
		radius: 10
}).addTo(mymap);
var polygon18961 = L.polygon([
		[55.79370891, 49.10700706],
	[55.794545, 49.109461],
	[55.792756, 49.110458],
	[55.792225, 49.109788],
	[55.79139, 49.107471]
	],
	{color: '#ff9191'}
).addTo(mymap);
var polygon18962= L.polygon([
	[55.79370891, 49.10700706],
	[55.79139, 49.1074711],
	[55.795684, 49.102921]
	],
	{color: '#82cdff'}
).addTo(mymap);
var polygon18963 = L.polygon([
	[55.79370891, 49.10700706],
	[55.795684, 49.102921],
	[55.794593, 49.109455],
	[55.794557, 49.109482]
	],
	{color: '#82cdff'}
).addTo(mymap);


var circle9 = L.circle([55.79441132, 49.1117747], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.1,
		radius: 10
}).addTo(mymap);

var polygon91 = L.polygon([
		[55.79441132, 49.1117747],
	[55.79642, 49.110174],
	[55.793601, 49.115088],
	[55.793525, 49.114428]
	],
	{color: '#82cdff'}
).addTo(mymap);

var polygon92 = L.polygon([
		[55.79441132, 49.1117747],
	[55.793525, 49.114428],
	[55.793043, 49.110346],
	[55.793881, 49.109847]
	],
	{color: '#ff9b9b'}
).addTo(mymap);

var polygon93 = L.polygon([
		[55.79441132, 49.1117747],
	[55.793881, 49.109847],
	[55.794997, 49.10923],
	[55.79642, 49.110174]
	],
	{color: '#ff1919'}
).addTo(mymap);

var circle193 = L.circle([55.7917514, 49.11354642], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.1,
		radius: 10
}).addTo(mymap);


var polygon1931 = L.polygon([
		[55.7917514, 49.11354642],
	[55.792795, 49.110518],
	[55.793106, 49.110909],
	[55.793601, 49.115088],
	[55.792222, 49.117942]
	],
	{color: '#fff54c'}
).addTo(mymap);

var polygon1932 = L.polygon([
		[55.7917514, 49.11354642],
	[55.792222, 49.117942],
	[55.790497, 49.110678]
	],
	{color: '#82cdff'}
).addTo(mymap);
var polygon1933 = L.polygon([
		[55.7917514, 49.11354642],
	[55.790497, 49.110678],
	[55.792225, 49.109788],
	[55.792795, 49.110518]
	],
	{color: '#fff993'}
).addTo(mymap);

var polygonL = L.polygon([
		[55.793803, 49.116783],
	[55.792807, 49.108447],
	[55.792807, 49.1084472]
	],
	{color: '#82cdff'}
).addTo(mymap);

var polygonL2 = L.polygon([
	[55.793501, 49.11140],
	[55.79183, 49.109305]
],{color: '#82cdff'}).addTo(mymap);

var polygonL3 = L.polygon([
	[55.795335, 49.109058],
	[55.792452, 49.110636]
],{color: '#82cdff'}).addTo(mymap);

var polygon2 = L.polygon([
		[55.79370891, 49.10700706],
	[55.79359648, 49.10670943],
	[55.79365306, 49.10688215]
	],
	{color: 'red', stroke:false}
).addTo(mymap);


polygon18961.bindPopup("18961");
polygon18962.bindPopup("18962");
polygon18963.bindPopup("18963");
polygon91.bindPopup("91");
polygon92.bindPopup("92");
polygon93.bindPopup("93");
polygon1931.bindPopup("1931");
polygon1932.bindPopup("1932");
polygon1933.bindPopup("1933");

var popup = L.popup();


function onMapClick(e) {
		popup
		.setLatLng(e.latlng)
		.setContent("коорд: " + e.latlng.toString())
		.openOn(mymap);
}


mymap.on('click', onMapClick);
var baseLayers = {
	"Grayscale": grayscale,
	"Streets": streets
};
L.control.layers(baseLayers).addTo(map);

});
