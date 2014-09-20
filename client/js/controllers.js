var trackApp = angular.module('trackApp', []);

trackApp.controller('TrackCtrl', function ($scope) {

    $scope.cargo = {
	'trackingId': 'ABC123',
	'transportStatus': 'In port',
	'location': 'New York',
	'destination': 'Helsinki',
	'estimatedArrival': '2009-03-12 12:00',
	'nextActivity': 'load cargo onto voyage 0200T in New York'
    }

    $scope.events = [
	{'text' : 'Received in Hongkong, at 3/1/09 12:00 AM.'},
	{'text' : 'Loaded onto voyage 0100S in Hongkong, at 3/2/09 12:00 AM.'},
	{'text' : 'Unloaded off voyage 0100S in New York, at 3/5/09 12:00 AM.'}
    ];
});