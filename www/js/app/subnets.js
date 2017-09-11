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
    var board = '.subnets-board'
    var widthScreen = window.screen.width;
    var heightScreen = window.screen.height;
    var subnetsWidth = window.screen.width*2.5;
    var slideImage = widthScreen*1.52;

    var center = ((subnetsWidth/2)-(widthScreen/2))*-1;
    var left = 0;
    var right= (subnetsWidth-widthScreen)*-1;

    var boardWidth = widthScreen*0.85;
    var boardHeight = heightScreen*0.10

    tl.set(subnets, {width:subnetsWidth}).set(subnets, {y:0}).set(subnets, {x:center});

    tl.set(board, {
      width: boardWidth, 
      x:getPositionX(boardWidth), 
      y:heightScreen*0.24,
      height:boardHeight,
      opacity:0
    });

    tl.add("step1");
    tl.call( function(){
      initialPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'SUBNETS_PRESENTATION_0');
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
    

    tl.to(board, 0.5, {opacity:1});
    tl.to(board, 0.5, {opacity:0});

    tl.add("step2");
    tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_01',"step1");
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
    

    boardHeight = boardHeight+20;
    tl.to(subnets, 0.5, {x:left});
    tl.to(board, 0, {height:boardHeight, y:heightScreen*0.33, x:widthScreen*0.05});

    tl.to(board, 0.5,{opacity:1});
    tl.to(board, 0.5,{opacity:0});

    
    tl.add("step3");
    tl.call(function() {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_02',"step2");
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

    tl.to(subnets, 2, {x:right});
    tl.to(board, 0, {x:widthScreen*0.1});
    tl.to(board, 0.5,{opacity:1});
    tl.to(board, 0.5,{opacity:0});


    tl.call(function() {
       endPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'END', 'SUBNETS_PRESENTATION_6',"step3","step1");
    });
  
});

function getPositionX(width){
    var dif = window.screen.width - width;
    return dif/2;
}

