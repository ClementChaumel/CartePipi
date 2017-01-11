'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", function ($scope) {

	$scope.isSanitaireChecked = true;
	$scope.isBarChecked = true;

	$scope.sanitaireClick = function(){
		console.log("coucou");
		$scope.isSanitaireChecked = !$scope.isSanitaireChecked;
	}

	$scope.barClick = function(){
		$scope.isBarChecked = !$scope.isBarChecked;
	}

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

        $http.get("https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=sanisettes&rows=100")
            .then(function(response) {
                response.data.records(function(sanisette){
                    L.marker([sanisette.fields.geo_point_2d[0], sanisette.fields.geo_point_2d[1]]).addTo(map)
                });
            });

        //var marker = L.marker([43.59325656089595, 1.434917774417878]).addTo(map);
}

	InitialiserCarte();

}]);
