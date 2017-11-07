angular.module('netanimations.subnets', [])
  .controller('SubnetsCtrl', function ($state, $scope, $ionicPopup, $translate, $compile) {
    TweenLite.defaultEase = Power1.easeInOut;
    $scope.end = false;
    $scope.restart = function () {
      tl.seek(0);
      $scope.end = false;
    };

    var tl = new TimelineLite();
    $scope.tl = tl;

    $scope.accessibilityGo = function (op, state) {
      switch (op) {
        case 'exit':
          $scope.tl.seek(0);
          $scope.tl.play();
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



    //initialize
    var navBarHeight = 68;
    var subnets = '.subnets';
    var board = '.subnets-board'
    var whiteBoard = '.white-board';
    var subnetMask = '.subnet-mask';
    var destinationIp1 = '.destination-ip-1';
    var subnetIp1 = '.subnet-ip-1';
    var subnetIp2 = '.subnet-ip-2';
    var convertingToBit = '.conveting-to-bit';
    var subnetMaskBit = '.subnet-mask-bit';
    var destinationIp1Bit = '.destination-ip-1-bit';
    var realizingLogicAnd = '.realizing-logic-and';
    var subnetIp1Bit = '.subnet-ip-1-bit';
    var convertingToDecimal = '.converting-to-decimal';
    var subnetPackage = '.subnet-package';
    var destinationIp2 = '.destination-ip-2';
    var destinationIp2Bit = '.destination-ip-2-bit';
    var subnetIp2Bit = '.subnet-ip-2-bit';
    var widthScreen = window.screen.width;
    var heightScreen = window.screen.height - navBarHeight;

    // white board
    var whiteBoardWidth = widthScreen * 0.9;
    var whiteBoardHeight = heightScreen * 0.95;

    //actions
    var show = { opacity: 1 };
    var hide = { opacity: 0 };

    // initialize background
    //tl.set(subnets, {width:subnetsWidth}).set(subnets, {y:0}).set(subnets, {x:center});
    var subnetsHeight = heightScreen * 0.80;
    tl.set(subnets, { height: subnetsHeight })
      .set(subnets, { y: heightScreen * 0.05 });
    var subnetsWidth = document.getElementsByClassName('subnets')[0].width;

    var center = ((subnetsWidth / 2) - (widthScreen / 2)) * -1;
    tl.set(subnets, { x: center });

    var left = 0;
    var right = (subnetsWidth - widthScreen) * -1;

    // black boarder board
    var boardWidth = subnetsWidth * 0.35;
    var boardHeight = heightScreen * 0.10

    //initialize black border board
    var boardY = heightScreen * 0.27;
    var boardX = getPositionX(boardWidth);
    tl.set(board, {
      width: boardWidth,
      x: boardX,
      y: boardY,
      height: boardHeight,
      opacity: 0
    });

    //initialize white board
    tl.set(whiteBoard, {
      width: whiteBoardWidth,
      height: whiteBoardHeight,
      x: getPositionX(whiteBoardWidth),
      opacity: 0
    });

    //initialize ips
    tl.set(subnetMask, hide);
    tl.set(subnetIp1, hide);
    tl.set(subnetIp2, hide);
    tl.set(destinationIp1, hide);
    tl.set(convertingToBit, hide);
    tl.set(subnetMaskBit, hide);
    tl.set(destinationIp1Bit, hide);
    tl.set(realizingLogicAnd, hide);
    tl.set(subnetIp1Bit, hide);
    tl.set(convertingToDecimal, hide);
    tl.set(subnetPackage, hide);
    tl.set(destinationIp2, hide);
    tl.set(destinationIp2Bit, hide);
    tl.set(subnetIp2Bit, hide);
    tl.set(subnetMask, {
      x: getPositionX(whiteBoardWidth) + 20
    });
    tl.set(destinationIp1, {
      x: getPositionX(whiteBoardWidth) + 20,
      y: heightScreen * 0.075
    });
    tl.set(convertingToBit, {
      y: heightScreen * 0.15,
      x: getPositionX(whiteBoardWidth) + 20
    });
    tl.set(subnetMaskBit, {
      y: heightScreen * 0.30,
      x: getPositionX(whiteBoardWidth) + 20
    })
    tl.set(destinationIp1Bit, {
      y: heightScreen * 0.45,
      x: getPositionX(whiteBoardWidth) + 20
    });
    tl.set(destinationIp2Bit, {
      y: heightScreen * 0.45,
      x: getPositionX(whiteBoardWidth) + 20
    });
    tl.set(realizingLogicAnd, {
      y: heightScreen * 0.55,
      x: getPositionX(whiteBoardWidth) + 20
    });
    tl.set(subnetIp1Bit, {
      y: heightScreen * 0.65,
      x: getPositionX(whiteBoardWidth) + 20
    });
    tl.set(subnetIp2Bit, {
      y: heightScreen * 0.65,
      x: getPositionX(whiteBoardWidth) + 20
    });
    tl.set(convertingToDecimal, {
      y: heightScreen * 0.75,
      x: getPositionX(whiteBoardWidth) + 20
    })
    tl.set(subnetIp1, {
      y: heightScreen * 0.825,
      x: getPositionX(whiteBoardWidth) + 20
    });
    tl.set(subnetIp2, {
      y: heightScreen * 0.825,
      x: getPositionX(whiteBoardWidth) + 20
    });

    // initialize package
    var packageY = subnetsHeight * 0.6;
    var packageX = subnetsWidth * 0.07;
    tl.set(subnetPackage, {
      y: packageY,
      x: packageX,
      rotation: 42
    });



    // initialize animation
    tl.add("step1");
    tl.call(function () {
      initialPopup(tl, $translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'SUBNETS_PRESENTATION_0');
    });
    tl.to('.animationFrame', 0.5, { x: 0 }); //dummy step - do not remove

    tl.to(board, 1, { opacity: 1 });
    tl.to(board, 1, { opacity: 0 });

    tl.add("step2");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_01', "step1", "step1");
    });
    tl.to('.animationFrame', 1, { x: 0 }); //dummy step - do not remove

    boardHeight = heightScreen * 0.20;
    boardWidth = subnetsWidth * 0.40;
    tl.to(subnets, 1, { x: left });
    boardY = heightScreen * 0.35;
    boardX = getPositionX(boardWidth);
    tl.to(board, 0, {
      height: boardHeight,
      width: boardWidth,
      y: boardY, x: boardX
    });

    tl.to(board, 1, show);
    tl.to(board, 1, hide);

    tl.add("step3");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_02', "step2", "step1");
    });
    tl.to('.animationFrame', 1, { x: 0 }); //dummy step - do not remove

    tl.to(subnets, 1, { x: right });
    tl.to(board, 0.1, { x: boardX });
    tl.to(board, 1, show);
    tl.to(board, 1, hide);

    tl.add("step4");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_03', "step3", "step1");
    });
    tl.to('.animationFrame', 1, { x: 0 }); //dummy step - do not remove

    tl.add("step5");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_04', "step4", "step1");
    });
    tl.to('.animationFrame', 1, { x: 0 }); //dummy step - do not remove

    tl.to(whiteBoard, 1, show);
    tl.to(subnetMask, 1, show);
    tl.to(destinationIp1, 1, show);
    tl.to(convertingToBit, 2, show);
    tl.to(subnetMaskBit, 2, show);
    tl.to(destinationIp1Bit, 1, show);

    tl.to(realizingLogicAnd, 1, show);
    tl.to(subnetIp1Bit, 1, show);
    tl.to(convertingToDecimal, 1.5, show);
    tl.to(subnetIp1, 1, show);

    tl.to(subnetMask, 0.1, hide);
    tl.to(destinationIp1, 0.1, hide);
    tl.to(convertingToBit, 0.1, hide);
    tl.to(subnetMaskBit, 0.1, hide);
    tl.to(destinationIp1Bit, 0.1, hide);
    tl.to(realizingLogicAnd, 0.1, hide);
    tl.to(subnetIp1Bit, 0.1, hide);
    tl.to(convertingToDecimal, 0.1, hide);

    tl.to('.animationFrame', 3, { x: 0 }); //dummy step - do not remove

    tl.add("step6");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_05', "step5", "step1");
    });
    tl.to('.animationFrame', 1, { x: 0 }); //dummy step - do not remove

    tl.to(subnetIp1, 1, { y: heightScreen * 0.30, x: widthScreen * 0.40 });
    tl.to(whiteBoard, 1, hide);
    boardHeight = heightScreen * 0.28;
    boardY = heightScreen * 0.30;
    tl.to(board, 0.1, { height: boardHeight, y: boardY });
    tl.to(board, 1, show);
    tl.to('.animationFrame', 3, { x: 0 }); //dummy step - do not remove

    tl.to(subnetIp1, 0.1, hide);
    tl.to(board, 1, hide);

    tl.to(subnetPackage, 1, show);

    packageX = subnetsWidth * 0.33;
    packageY = subnetsHeight * 0.99;
    tl.to(subnetPackage, 4, { y: packageY, x: packageX });

    tl.to(subnetPackage, 1, hide);

    tl.add("step7");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_06', "step6", "step1");
    });
    tl.to('.animationFrame', 1, { x: 0 }); //dummy step - do not remove   

    tl.to(whiteBoard, 1, show);
    tl.to(subnetMask, 1, show);

    tl.set(destinationIp2, {
      x: getPositionX(whiteBoardWidth) + 20,
      y: heightScreen * 0.075
    });

    tl.to(destinationIp2, 1, show);
    tl.to(convertingToBit, 1, show);
    tl.to(subnetMaskBit, 1, show);
    tl.to(destinationIp2Bit, 1, show);
    tl.to(realizingLogicAnd, 1, show);
    tl.to(subnetIp2Bit, 1, show);
    tl.to(convertingToDecimal, 1, show);
    tl.to(subnetIp2, 1, show);

    tl.to(subnetMask, 0.1, hide);
    tl.to(destinationIp2, 0.1, hide);
    tl.to(convertingToBit, 0.1, hide);
    tl.to(subnetMaskBit, 0.1, hide);
    tl.to(destinationIp2Bit, 0.1, hide);
    tl.to(realizingLogicAnd, 0.1, hide);
    tl.to(subnetIp2Bit, 0.1, hide);
    tl.to(convertingToDecimal, 0.1, hide);
    tl.to(subnetIp2, 1, hide);
    tl.to(whiteBoard, 1, hide);

    tl.to(subnetPackage, 1, show);

    packageX = subnetsWidth * 0.20;
    packageY = subnetsHeight * 0.80;
    tl.to(subnetPackage, 3, { y: packageY, x: packageX });
    tl.to(subnetPackage, 1, { rotation: 0 });
    tl.to(subnets, 2, { x: center });

    tl.add("step8");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNETS_PRESENTATION_07', "step7", "step1");
    });
    tl.to('.animationFrame', 1, { x: 0 }); //dummy step - do not remove   

    tl.to(subnets, 2, { x: left });
    tl.to(subnetPackage, 1, { rotation: -42 });
    packageX = subnetsWidth * 0.07;
    packageY = subnetsHeight * 0.99;
    tl.to(subnetPackage, 3, { y: packageY, x: packageX });
    tl.to(subnetPackage, 1, hide);


    tl.to('.animationFrame', 1, { x: 0 }); //dummy step - do not remove

    tl.call(function () {
      endPopup(tl, $translate, $ionicPopup, $state, $scope, $compile, 'END', 'SUBNETS_PRESENTATION_6', "step8", "step1");
    });

  });

function getPositionX(width) {
  var dif = window.screen.width - width;
  return dif / 2;
}

