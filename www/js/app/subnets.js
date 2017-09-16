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

    //initialize
    var subnets = '.subnets';
    var board = '.subnets-board'
    var whiteBoard = '.white-board';
    var subnetMask = '.subnet-mask';
    var destinationIp1 = '.destination-ip-1';
    var subnetIp1 = '.subnet-ip-1';
    var widthScreen = window.screen.width;
    var heightScreen = window.screen.height;

    // background
    var subnetsWidth = window.screen.width*2.5;
    var center = ((subnetsWidth/2)-(widthScreen/2))*-1;
    var left = 0;
    var right= (subnetsWidth-widthScreen)*-1;

    // black boarder board
    var boardWidth = widthScreen*0.85;
    var boardHeight = heightScreen*0.10

    // white board
    var whiteBoardWidth = widthScreen*0.8;
    var whiteBoardHeight = heightScreen*0.8;

    //actions
    var show = {opacity:1};
    var hide = {opacity:0};

    // initialize background
    tl.set(subnets, {width:subnetsWidth}).set(subnets, {y:0}).set(subnets, {x:center});

    //initialize black border board
    tl.set(board, {
      width: boardWidth, 
      x:getPositionX(boardWidth), 
      y:heightScreen*0.24,
      height:boardHeight,
      opacity:0
    });

    //initialize white board
    tl.set(whiteBoard, {
      width: whiteBoardWidth,
      height: whiteBoardHeight,
      x:getPositionX(whiteBoardWidth),
      opacity:0
    });

    //initialize ips
    tl.set(subnetMask, hide);
    tl.set(subnetIp1, hide);
    tl.set(destinationIp1, hide);
    tl.set(subnetMask, {
      x:getPositionX(whiteBoardWidth)
    });


    tl.add("step1");
    tl.call( function(){
      initialPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'SUBNETS_PRESENTATION_0');
    });
    tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
    

    tl.to(board, 0.5, {opacity:1});
    tl.to(board, 0.5, {opacity:0});

    // tl.add("step2");
    // tl.call(function() {
    //   commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_01',"step1");
    // });
    // tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove
    

    boardHeight = boardHeight+20;
    tl.to(subnets, 0.5, {x:left});
    tl.to(board, 0, {height:boardHeight, y:heightScreen*0.33, x:widthScreen*0.05});

    tl.to(board, 0.5,{opacity:1});
    tl.to(board, 0.5,{opacity:0});

    
    // tl.add("step3");
    // tl.call(function() {
    //   commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_02',"step2");
    // });
    // tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

    tl.to(subnets, 0.5, {x:right});
    tl.to(board, 0, {x:widthScreen*0.1});
    tl.to(board, 0.5,{opacity:1});
    tl.to(board, 0.5,{opacity:0});

    tl.to(whiteBoard, 0.5, show);
    tl.to(subnetMask, 0.5, show);


    tl.call(function() {
       endPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'END', 'SUBNETS_PRESENTATION_6',"step1","step1");
    });
  
});

function getPositionX(width){
    var dif = window.screen.width - width;
    return dif/2;
}

