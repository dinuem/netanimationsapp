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
    var convertingToBit = '.conveting-to-bit';
    var subnetMaskBit = '.subnet-mask-bit';
    var destinationIp1Bit = '.destination-ip-1-bit';
    var realizingLogicAnd = '.realizing-logic-and';
    var subnetIp1Bit = '.subnet-ip-1-bit';
    var convertingToDecimal = '.converting-to-decimal';
    var subnetPackage = '.subnet-package';
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
    var boardY = heightScreen*0.24;
    tl.set(board, {
      width: boardWidth, 
      x:getPositionX(boardWidth), 
      y:boardY,
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
    tl.set(convertingToBit, hide);
    tl.set(subnetMaskBit, hide);
    tl.set(destinationIp1Bit, hide);
    tl.set(realizingLogicAnd, hide);
    tl.set(subnetIp1Bit, hide);
    tl.set(convertingToDecimal, hide);
    tl.set(subnetPackage, hide);
    tl.set(subnetMask, {
      x:getPositionX(whiteBoardWidth)+20
    });
    tl.set(destinationIp1, {
      x:getPositionX(whiteBoardWidth)+20,
      y:heightScreen*0.05
    });
    tl.set(convertingToBit, {
      y:heightScreen*0.1,
      x:getPositionX(whiteBoardWidth)+20
    });
    tl.set(subnetMaskBit, {
      y:heightScreen*0.20,
      x:getPositionX(whiteBoardWidth)+20
    })
    tl.set(destinationIp1Bit, {
      y:heightScreen*0.30,
      x:getPositionX(whiteBoardWidth)+20
    });
    tl.set(realizingLogicAnd, {
      y:heightScreen*0.40,
      x:getPositionX(whiteBoardWidth)+20
    });
    tl.set(subnetIp1Bit, {
      y:heightScreen*0.45,
      x:getPositionX(whiteBoardWidth)+20
    });
    tl.set(convertingToDecimal, {
      y:heightScreen*0.5,
      x:getPositionX(whiteBoardWidth)+20
    })
    tl.set(subnetIp1, {
      y:heightScreen*0.55,
      x:getPositionX(whiteBoardWidth)+20
    });

    // initialize package
    var packageY = heightScreen*0.46;
    var packageX = heightScreen*0.14;
    tl.set(subnetPackage, {
      y:packageY,
      x:packageX, 
      rotation: 45
    });
    


    // initialize animation
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
    tl.to(destinationIp1, 0.5, show);
    tl.to(convertingToBit, 0.5, show);
    tl.to(subnetMaskBit, 0.5, show);
    tl.to(destinationIp1Bit, 0.5, show);
    tl.to(realizingLogicAnd, 0.5, show);
    tl.to(subnetIp1Bit, 0.5, show);
    tl.to(convertingToDecimal, 0.5, show);
    tl.to(subnetIp1, 0.5, show);

    tl.to(subnetMask, 0.1, hide);
    tl.to(destinationIp1, 0.1, hide);
    tl.to(convertingToBit, 0.1, hide);
    tl.to(subnetMaskBit, 0.1, hide);
    tl.to(destinationIp1Bit, 0.1, hide);
    tl.to(realizingLogicAnd, 0.1, hide);
    tl.to(subnetIp1Bit, 0.1, hide);
    tl.to(convertingToDecimal, 0.1, hide);

    tl.to(subnetIp1, 0.5, {y:heightScreen*0.25, x:getPositionX(widthScreen/3.5)});
    tl.to(whiteBoard, 0.5, hide);
    boardHeight += 55;
    boardY += 5;
    tl.to(board, 0.1, {height:boardHeight, y:boardY});
    tl.to(board, 0.3, show);

    tl.to(subnetIp1, 0.1, hide);
    tl.to(board, 0.1, hide);
    
    tl.to(subnetPackage, 0.5, show);

    packageX = widthScreen*0.75;
    packageY = heightScreen*0.75;
    tl.to(subnetPackage, 2, {y:packageY, x:packageX});

    tl.to(subnetPackage, 1, hide);


    tl.to('.animationFrame', 1, {x: 0}); //dummy step - do not remove


    tl.call(function() {
       endPopup(tl,$translate, $ionicPopup, $state, $scope, $compile, 'END', 'SUBNETS_PRESENTATION_6',"step1","step1");
    });
  
});

function getPositionX(width){
    var dif = window.screen.width - width;
    return dif/2;
}

