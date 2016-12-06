var gameApp = angular.module("gameApp", ["ui.bootstrap"])

.controller("mainController", ["$scope", "$http", "$uibModal", function($scope, $http, $uibModal) {
    $scope.filters = { };
    

    var getGames = $http({
        method : "GET",
        url : "/api/gameList"
    }).then(function mySucces(response) {
        $scope.games = response.data;
        for(var i = 0; i < $scope.games.length; i++){
            $scope.games[i].image_180x100 = "http:" + $scope.games[i].image_180x100;
            console.log($scope.games[i].image_180x100);
        }
    });

    $scope.open = function (oneGame) {
    console.log('opening pop up');
    var modalInstance = $uibModal.open({
    templateUrl: 'popup.html',
    controller: 'PopupCont',
    resolve: {
        gameImage: function () {
            return oneGame;
        }
    }
    });
}

    
 }]);

 angular.module('gameApp').controller('closeModal', ['$scope','$modalInstance',function ($scope, $modalInstance) {
    $scope.modalTitle = gameImage.title;
    $scope.modalTitle = gameImage.image_180x100;
    $scope.close = function () {
    $modalInstance.dismiss('cancel');
};
}]);

