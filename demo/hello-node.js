(function(angular) {
  'use strict';
var myApp = angular.module('spicyApp1', []);

myApp.controller('SpicyController', ['$scope', function($scope) {
    $scope.spice = 'very';
    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
    
    
    
}]);

myApp.controller('ConvertController', ['$scope', function($scope) {
  $scope.convertedString = 'default';
  
  $scope.convertString = function(toConvert) {
        var milliList = toConvert.match(/\d{13}/g);
        var millisToDate = {};
        function jsLoopMapMillisToDate(milliList){
          var millisToDate = {};
          for (var i = 0; i < milliList.length; i++) {
            var milli = milliList[i];
            var date = new Date(new Number(milli));
            millisToDate[milli] = date;
          }
          return millisToDate;
        }

        function angularLoopMapMillisToDate(milliList){
          var millisToDate = {};
          angular.forEach(milliList, function(value, key) {
            this.push(key + ': ' + value);
          }, log);

          return millisToDate;
        }

        if ((typeof(milliList) !== 'undefined') && (milliList !== null)) {
          // make this a function mapMillisToDate(String)
          
          var millisToDate = jsLoopMapMillisToDate(milliList);
          millisToDate = null;
          millisToDate = angularLoopMapMillisToDate(milliList);

          for (var key in millisToDate){
            var replaceRegex = new RegExp(key, 'g');
            toConvert = toConvert.replace(replaceRegex, millisToDate[key]);
          }

          $scope.convertedString = toConvert;

        }
        

    };

}]);
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/