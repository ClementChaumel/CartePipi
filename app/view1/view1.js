'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", '$http', function ($scope, $http) {

	$scope.isSanitaireChecked = true;
	$scope.isBarChecked = true;
	$scope.map = L.map('map').setView([43.6008028, 1.3626289], 12);

	

	function InitialiserCarte() {

		//var map = L.map('map').setView([43.6008028, 1.3626289], 12);

		// create the tile layer with correct attribution
		var tuileUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

		var attrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

		var osm = L.tileLayer(tuileUrl, {
			minZoom: 8,
			maxZoom: 17,
			attribution: attrib
		});

		osm.addTo($scope.map);

		var sanitaireIcon = L.icon({
			iconUrl: 'images/marqueur_sanitaire.png',

			iconSize:     [50, 50], // size of the icon
			iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
			popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});


		$http.get("https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=sanisettes&rows=100")
		.then(function(response) {
			response.data.records.forEach(function(sanisette){
				L.marker([sanisette.fields.geo_point_2d[0], sanisette.fields.geo_point_2d[1]], {icon: sanitaireIcon}).addTo($scope.map)
			});
		});
		//var marker = L.marker([43.59325656089595, 1.434917774417878]).addTo(map);
	}

	$scope.sanitaireClick = function(){
		$scope.isSanitaireChecked = !$scope.isSanitaireChecked;
		if(!$scope.isSanitaireChecked){
			$scope.map.eachLayer(function (layer) {
    			$scope.map.removeLayer(layer);
			});
			var tuileUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

			var attrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

			var osm = L.tileLayer(tuileUrl, {
				minZoom: 8,
				maxZoom: 17,
				attribution: attrib
			});

			osm.addTo($scope.map);
		}else{
			var sanitaireIcon = L.icon({
				iconUrl: 'images/marqueur_sanitaire.png',

				iconSize:     [50, 50], // size of the icon
				iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
				popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
			});

			$http.get("https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=sanisettes&rows=100")
			.then(function(response) {
				response.data.records.forEach(function(sanisette){
					L.marker([sanisette.fields.geo_point_2d[0], sanisette.fields.geo_point_2d[1]], {icon: sanitaireIcon}).addTo($scope.map)
				});
			});
		}
	}

	$scope.barClick = function(){
		$scope.isBarChecked = !$scope.isBarChecked;
	}


	InitialiserCarte();

}]);
