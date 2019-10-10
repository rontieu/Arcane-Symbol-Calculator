var app = angular.module("symbolsApp", []);

app.controller("symbolsCtrl", function($scope) {
  
  $scope.Math = window.Math;
  
  $scope.symbol = {
    exp: [0, 12, 27, 47, 74, 110, 157, 217, 292, 384, 495, 627, 782, 962, 1169, 1405, 1672, 1972, 2307, 2679]
  }
  
  $scope.symbols = {
    vj : {
      level: 0,
      exp: 0,
      toNextLevel: 0,
      perDay: 14
    },
    chuchu : {
      level: 0,
      exp: 0,
      toNextLevel: 0,
      perDay: 19
    },
    lach : {
      level: 0,
      exp: 0,
      toNextLevel: 0,
      floor:0,
      perDay: 0
    },
    arcana : {
      level: 0,
      exp: 0,
      toNextLevel: 0,
      perDay: 18
    },
    morass : {
      level: 0,
      exp: 0,
      toNextLevel: 0,
      perDay: 8
    },
    esfera : {
      level: 0,
      exp: 0,
      toNextLevel: 0,
      perDay: 8
    }
  }


  /** Returns total Arcane Power */
  $scope.totalAP = function() {
    var totalAP = 0;   
    angular.forEach($scope.symbols, function(symbol) {
      if (symbol.level > 0 && symbol.level <= 20) {
        symbol.ap = 20 + symbol.level * 10;
        totalAP += symbol.ap;
      }
    })   
    return totalAP;
  }
  
  /** Retruns cummulative exp for symbol */
  $scope.cummulativeExp = function(symbol) {
    return $scope.symbol.exp[symbol.level - 1] + symbol.exp;
  }
});