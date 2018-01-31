angular
    .module("devmtnTravel")
    .controller("packagesCtrl", function($scope, $stateParams, mainSrvc) {
        mainSrvc.getPackageInfo().then(response => {
            $scope.allPackages = response.data;
            $scope.country = $stateParams.country;
            // if ($stateParams.country) {
            //     $scope.packages = $scope.allPackages.filter(package => {
            //         return package.country === $stateParams.country;
            //     });
            // }
        });
    });
