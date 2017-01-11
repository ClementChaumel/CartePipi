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
	$scope.map = L.map('map').setView([43.6050999, 1.4481784], 13);

	$scope.localisationBiere = {
  "type": "FeatureCollection",
  "generator": "overpass-turbo",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2017-01-11T13:39:02Z",
  "features": [
    {
      "type": "Feature",
      "id": "node/304974924",
      "properties": {
        "@id": "node/304974924",
        "amenity": "pub",
        "name": "Txus"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.440727,
          43.6101933
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/304975134",
      "properties": {
        "@id": "node/304975134",
        "amenity": "pub",
        "name": "Le Père Peinard"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4424864,
          43.61128
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/306128777",
      "properties": {
        "@id": "node/306128777",
        "amenity": "pub",
        "name": "Bar de la Lune"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4524352,
          43.605405
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/306128866",
      "properties": {
        "@id": "node/306128866",
        "amenity": "pub",
        "brewery": "stella artois;leffe",
        "name": "Le Café Populaire"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4514716,
          43.6044018
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/306128879",
      "properties": {
        "@id": "node/306128879",
        "addr:housenumber": "14",
        "addr:postcode": "31000",
        "addr:street": "rue de L'Industrie",
        "amenity": "pub",
        "microbrewery": "yes",
        "name": "The Frog and Rosbif",
        "website": "http://www.frogpubs.com/english-pub.php?pub=5"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.451104,
          43.6048605
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/313982028",
      "properties": {
        "@id": "node/313982028",
        "amenity": "pub",
        "name": "Le Filochard"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4406775,
          43.599503
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/313983528",
      "properties": {
        "@id": "node/313983528",
        "amenity": "pub",
        "name": "Le Bar Basque"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.436058,
          43.6037148
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/423867107",
      "properties": {
        "@id": "node/423867107",
        "addr:city": "Toulouse",
        "addr:street": "Place de la Patte d'Oie",
        "amenity": "pub",
        "name": "Le Cypriani"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4234437,
          43.5966538
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/423867108",
      "properties": {
        "@id": "node/423867108",
        "addr:city": "Toulouse",
        "addr:street": "Allées Maurice Sarraut",
        "amenity": "pub",
        "name": "Bistrot Bel Ami"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4224901,
          43.5958584
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/429262363",
      "properties": {
        "@id": "node/429262363",
        "alt_name": "Le Breughel",
        "amenity": "pub",
        "brewery": "chouffe",
        "contact:full": "30, rue de la Chaîne , 31000, Toulouse",
        "description": "open late at night",
        "name": "Breughel l'Ancien"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.439217,
          43.6094263
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/429270455",
      "properties": {
        "@id": "node/429270455",
        "addr:full": "58, Boulevard Arcole, 31000, Toulouse",
        "amenity": "pub",
        "description": "rock'n'roll bar",
        "name": "L'Autan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4388607,
          43.6117637
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/448753123",
      "properties": {
        "@id": "node/448753123",
        "amenity": "pub",
        "brewery": "chouffe;kwak",
        "internet_access": "wlan",
        "name": "Delicatessen",
        "source": "cadastre-dgi-fr source : Direction Générale des Impôts - Cadastre. Mise à jour : 2009"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4540373,
          43.601466
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/450161354",
      "properties": {
        "@id": "node/450161354",
        "amenity": "pub",
        "name": "Biératorium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4406831,
          43.6005918
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/450161415",
      "properties": {
        "@id": "node/450161415",
        "amenity": "pub",
        "name": "Le Petit Voisin"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4406262,
          43.6015296
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/450635517",
      "properties": {
        "@id": "node/450635517",
        "amenity": "pub",
        "name": "Mulligans"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4469192,
          43.5863965
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/455444970",
      "properties": {
        "@id": "node/455444970",
        "amenity": "pub",
        "name": "Ô Boudu Pont"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4363842,
          43.5989145
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/471533084",
      "properties": {
        "@id": "node/471533084",
        "amenity": "pub",
        "name": "London Town",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4439291,
          43.5972942
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/472409959",
      "properties": {
        "@id": "node/472409959",
        "amenity": "pub",
        "name": "Bar du Matin",
        "source": "cadastre-dgi-fr source : Direction Générale des Impôts - Cadastre. Mise à jour : 2009"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4443419,
          43.5980253
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/631754993",
      "properties": {
        "@id": "node/631754993",
        "amenity": "pub",
        "name": "Sud Bar"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4523944,
          43.6058039
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/631754998",
      "properties": {
        "@id": "node/631754998",
        "amenity": "pub",
        "name": "Le Pery",
        "website": "http://www.lepery.com"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4530932,
          43.6058881
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/631790714",
      "properties": {
        "@id": "node/631790714",
        "addr:city": "Toulouse",
        "addr:housenumber": "8",
        "addr:postcode": "31000",
        "addr:street": "Rue Gabriel Péri",
        "amenity": "pub",
        "name": "Connexion Café",
        "website": "http://www.connexion-cafe.com/",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4504485,
          43.6055356
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/636914871",
      "properties": {
        "@id": "node/636914871",
        "amenity": "pub",
        "name": "Le Vincennes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4539273,
          43.6061765
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/637743429",
      "properties": {
        "@id": "node/637743429",
        "amenity": "pub",
        "name": "Arty Bar",
        "website": "https://www.facebook.com/pages/Arty-Bar/215930515094692"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4519391,
          43.6068885
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/665852830",
      "properties": {
        "@id": "node/665852830",
        "amenity": "pub",
        "description": "restauration, concerts, expos",
        "name": "Le Nain Jaune",
        "website": "http://aunainjaune.free.fr"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4363327,
          43.604175
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/772598420",
      "properties": {
        "@id": "node/772598420",
        "amenity": "pub",
        "name": "Ô Juice Bar",
        "website": "https://fr-fr.facebook.com/pages/%C3%94-Juice-Bar/222713487923540"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4372923,
          43.6027195
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1215767144",
      "properties": {
        "@id": "node/1215767144",
        "amenity": "pub",
        "contact:facebook": "themeltingpotpub",
        "name": "The Melting Pot"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4471926,
          43.6074632
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1241635369",
      "properties": {
        "@id": "node/1241635369",
        "addr:street": "Rue Temponières",
        "amenity": "pub",
        "name": "Le Pretexte"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4425825,
          43.6014969
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1329882057",
      "properties": {
        "@id": "node/1329882057",
        "addr:housenumber": "9",
        "addr:postcode": "31000",
        "addr:street": "rue du Pont-Guilhemery",
        "amenity": "pub",
        "brewery": "guinness",
        "cuisine": "burger",
        "name": "De Danú",
        "source": "Survey",
        "website": "http://www.dedanu.com"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.455916,
          43.6007788
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1394661676",
      "properties": {
        "@id": "node/1394661676",
        "amenity": "pub",
        "name": "La Fabrique"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4399286,
          43.607378
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1667118801",
      "properties": {
        "@id": "node/1667118801",
        "amenity": "pub",
        "name": "Bar d'en face"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4364423,
          43.603898
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1667118840",
      "properties": {
        "@id": "node/1667118840",
        "amenity": "pub",
        "name": "L'Épisode Café"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4386039,
          43.6020511
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1667118865",
      "properties": {
        "@id": "node/1667118865",
        "amenity": "pub",
        "name": "Le Saint des Seins"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4364659,
          43.6034883
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1773480422",
      "properties": {
        "@id": "node/1773480422",
        "amenity": "pub",
        "brewery": "Murphy's Irish Stout",
        "internet_access": "no",
        "name": "The Dispensary"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4291727,
          43.5992562
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1774388859",
      "properties": {
        "@id": "node/1774388859",
        "amenity": "pub",
        "name": "Le Seventies"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.456777,
          43.6007613
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1838368463",
      "properties": {
        "@id": "node/1838368463",
        "addr:housenumber": "4",
        "addr:postcode": "31000",
        "addr:street": "Rue Gabriel Péri",
        "amenity": "pub",
        "name": "Snapper Rock"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4499372,
          43.605476
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1838370571",
      "properties": {
        "@id": "node/1838370571",
        "addr:housenumber": "34",
        "addr:postcode": "31000",
        "addr:street": "Rue de la Colombette",
        "amenity": "pub",
        "brewery": "chouffe;tripel_karmeliet;kwak",
        "facebook": "thekrakenparadise",
        "name": "Kraken Paradise",
        "old_name": "Le P'tit Bouchon",
        "opening_hours": "Tu-Sa 14:00-22:00"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4527053,
          43.6045231
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1976765834",
      "properties": {
        "@id": "node/1976765834",
        "amenity": "pub",
        "name": "The George and Dragon"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4395702,
          43.6074241
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/1976765835",
      "properties": {
        "@id": "node/1976765835",
        "amenity": "pub",
        "name": "Beer Mosaic",
        "opening_hours": "Tu-We 12:00-14:30;Th-Sa 12:00-14:30,18:00-23:00",
        "website": "http://www.beermosaic.com/"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.441818,
          43.6060822
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2377741716",
      "properties": {
        "@id": "node/2377741716",
        "amenity": "pub",
        "name": "Irish Temple"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4503846,
          43.5785076
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2457312885",
      "properties": {
        "@id": "node/2457312885",
        "amenity": "pub",
        "name": "The Classroom",
        "source": "survey",
        "website": "https://www.facebook.com/TheClassroomToulouse/"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4386121,
          43.6044801
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2525414066",
      "properties": {
        "@id": "node/2525414066",
        "amenity": "pub",
        "name": "La Dernière Chance",
        "source": "survey",
        "website": "https://fr-fr.facebook.com/pages/La-Derni%C3%A8re-Chance/155815834527751"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4393469,
          43.6108561
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2525414090",
      "properties": {
        "@id": "node/2525414090",
        "addr:city": "Toulouse",
        "addr:housenumber": "14",
        "addr:postcode": "31000",
        "addr:street": "Place Arnaud Bernard",
        "amenity": "pub",
        "description": "Le Bistrot Voyageur",
        "name": "Le Communard",
        "opening_hours": "Mo-Fr 17:00-2:00; Sa 17:00-3:00",
        "smoking": "outside",
        "website": "https://www.facebook.com/pages/Le-Communard/127924427302574"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4392442,
          43.6109605
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2661134946",
      "properties": {
        "@id": "node/2661134946",
        "addr:city": "Toulouse",
        "addr:street": "Avenue de Lombez",
        "amenity": "pub",
        "name": "L'Avenue"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4135341,
          43.594779
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/2994928140",
      "properties": {
        "@id": "node/2994928140",
        "amenity": "pub",
        "brewery": "chouffe;tripel_karmeliet;Bush de Noël",
        "name": "L'ancienne Belgique",
        "website": "http://ancienne.belgique.free.fr/"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4451629,
          43.599482
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/3491990850",
      "properties": {
        "@id": "node/3491990850",
        "amenity": "pub",
        "name": "Le Point Carré"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4500817,
          43.5793238
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/3777164461",
      "properties": {
        "@id": "node/3777164461",
        "amenity": "pub",
        "name": "Le Kilt'on",
        "source": "survey"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4512608,
          43.614191
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/4248138233",
      "properties": {
        "@id": "node/4248138233",
        "amenity": "pub",
        "name": "Chez Steve"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4578353,
          43.6208478
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/4351343957",
      "properties": {
        "@id": "node/4351343957",
        "amenity": "pub",
        "description": "bar PMU",
        "name": "Eden bar"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4290237,
          43.5973814
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/4402547361",
      "properties": {
        "@id": "node/4402547361",
        "amenity": "pub"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4133634,
          43.5810796
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/4413129480",
      "properties": {
        "@id": "node/4413129480",
        "amenity": "pub"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4637448,
          43.5705694
        ]
      }
    },
    {
      "type": "Feature",
      "id": "node/4413129481",
      "properties": {
        "@id": "node/4413129481",
        "amenity": "pub"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.4635216,
          43.5708811
        ]
      }
    }
  ]
};

	$scope.addSanitaire = function(){
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

	$scope.addBiere = function(){
			var biereIcon = L.icon({
				iconUrl: 'images/marqueur_biere.png',
				iconSize:     [50, 50], // size of the icon
				iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
				popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
			});

			$scope.localisationBiere.features.forEach(function(locabiere){
				L.marker([locabiere.geometry.coordinates[1], locabiere.geometry.coordinates[0]], {icon: biereIcon}).addTo($scope.map)
			})
	}

	$scope.removeAll = function(){
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
	}

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

		$scope.addSanitaire();
		$scope.addBiere();
	}

	$scope.sanitaireClick = function(){
		$scope.isSanitaireChecked = !$scope.isSanitaireChecked;
		if(!$scope.isSanitaireChecked){
			$scope.removeAll();
			if($scope.isBarChecked){
				$scope.addBiere()
			}
		}else{
			$scope.addSanitaire();
		}
	}

	$scope.barClick = function(){
		$scope.isBarChecked = !$scope.isBarChecked;
		if(!$scope.isBarChecked){
			$scope.removeAll();
			if($scope.isSanitaireChecked){
				$scope.addSanitaire()
			}
		}else{
			$scope.addBiere();
		}
	}


	InitialiserCarte();

}]);
