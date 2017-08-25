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

    var subnets = '.subnets';
    var widthScreen = window.screen.width;
    var subnetsWidth = window.screen.width*2.5;
    var slideImage = widthScreen*1.52;

    var imgSubnets = document.getElementById("subnets");
    var center = ((subnetsWidth/2)-(widthScreen/2))*-1;
    var left = 0;
    var right= (subnetsWidth-widthScreen)*-1;

    tl.set(subnets, {width:subnetsWidth}).set(subnets, {y:0}).set(subnets, {x:center});
    console.log("tela", widthScreen);
    console.log("img", subnetsWidth);
    console.log("center", center); 

    tl.add("step1");
    tl.call( function(){
      initialPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'SUBNETS_PRESENTATION_0');
    });
    tl.to('.animationFrame', 3, {x: 0}); //dummy step - do not remove
  
    //tl.to(subnets, 1.5, {width: 200});

    

    tl.add("step2");
    tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_01',"step1");
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
    
    tl.to(subnets, 2, {x:left});
    
    tl.add("step3");
    tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_02',"step2");
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

    tl.to(subnets, 2, {x:right});

    // tl.add("step4");
    // tl.call(function() {
    //     commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_4',"step3");
    // });
    // tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

    // tl.add("step5");
    // tl.call(function() {
    //     commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_5',"step4");
    // });
    // tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

    // tl.add("step6");
    // tl.call(function() {
    //     endPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'END', 'SUBNETS_PRESENTATION_6',"step5","step1");
    // });
  
});

