'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

	function InitialiserCarte() {

    var map = L.map('map').setView([43.6008028, 1.3626289], 12);

    // create the tile layer with correct attribution
    var tuileUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

    var attrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

    var osm = L.tileLayer(tuileUrl, {
        minZoom: 8,
        maxZoom: 17,
        attribution: attrib
    });

    osm.addTo(map);

    var marker = L.marker([45.7531152, 4.827906]).addTo(map);
}

	InitialiserCarte();

}]);
