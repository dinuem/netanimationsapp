angular.module('netanimations.subnets', [])
.controller('SubnetsCtrl', function($state, $scope, $ionicPopup, $translate, $compile) {
  
  $scope.end = false;
  
    var tl = new TimelineLite();
    $scope.tl = tl;
  
    $scope.accessibilityGo = function(op,state){
      switch (op) {
        case 'exit':
          $scope.tl.seek(0);
          $state.go(state);
          break;
        case 'next':
          cleanContentInfo();
          $scope.tl.resume();
          break;
        case 'back':
          cleanContentInfo();
          $scope.tl.seek(state); //checkpoint de retrocesso
          $scope.tl.play();
          break;
        case 'restart':
          cleanContentInfo();
          $scope.tl.seek(state);
          $scope.tl.play();
          break;
      }
    };

    $scope.restart = function () {
      tl.seek(0);
      $scope.end = false;
    };

    TweenLite.defaultEase = Power1.easeInOut;

    tl.add("step1");
    tl.call( function(){
      initialPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'SUBNETS_PRESENTATION_1');
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
  
    tl.add("step2");
    tl.call(function() {
        commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_2',"step1");
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

    tl.add("step3");
    tl.call(function() {
        commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_3',"step2");
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

    tl.add("step4");
    tl.call(function() {
        commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_4',"step3");
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

    tl.add("step5");
    tl.call(function() {
        commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_5',"step4");
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

    tl.add("step6");
    tl.call(function() {
        endPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'END', 'SUBNETS_PRESENTATION_6',"step5","step1");
    });
  
});

