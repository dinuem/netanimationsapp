angular.module('netanimations.subnet-mask', [])
  .controller('SubnetMaskCtrl', function ($state, $scope, $ionicPopup, $translate, $compile) {
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

    var show = {opacity:1};
    var hide = {opacity:0};

    var subnet = '.subnet';
    var subnet1 = '.subnet1';
    var subnet2 = '.subnet2';
    var bar1 = '.bar1';
    var bar2 = '.bar2';
    var routerSwitch = '.router-switch';
    var ipRede = '.ip-rede';
    var whiteBoard = '.white-board';
    var mask = '.mask';
    var newMask = '.new-mask';
    var maskBit = '.mask-bit';
    var newMaskBit = '.new-mask-bit';
    var convertingToBit = '.converting-to-bit';
    var maskBit1 = '.mask-bit-1';
    var maskBit2 = '.mask-bit-2';
    var thisBitAre =  '.this-bits-are-to';
    var net = '.net';
    var host = '.host';
    var ip1 = '.ip1';
    var ip2 = '.ip2';
    var ip1Bit = '.ip1-bit';
    var ip2Bit = '.ip2-bit';

    var subnetWidth = window.screen.width;

    tl.set(subnet, {width: subnetWidth});
    tl.set(routerSwitch, {width: subnetWidth, height: window.screen.height*0.67});
    tl.set(ipRede, {x:window.screen.width*0.6, y: window.screen.height*0.2, opacity:0});
    tl.set(whiteBoard, {
      width: window.screen.width*0.9, 
      height: window.screen.height*0.8,
      y:window.screen.height*.03,
      x:window.screen.width*0.05,
      opacity:0
    });
    tl.set(mask, {
      y: window.screen.height*0.05,
      x: window.screen.width*0.06,
      opacity:0
    });
    tl.set(newMask, {
      y: window.screen.height*0.05,
      x: window.screen.width*0.06,
      opacity:0
    });
    tl.set(convertingToBit, {
      y: window.screen.height*0.10,
      x: window.screen.width*0.06,
      opacity:0
    });
    tl.set(maskBit, {
      y: window.screen.height*0.15,
      x: window.screen.width*0.06,
      opacity:0
    });
    tl.set(newMaskBit, {
      y: window.screen.height*0.15,
      x: window.screen.width*0.06,
      opacity:0
    });
    tl.set(thisBitAre, {
      y: window.screen.height*0.20,
      x: window.screen.width*0.06,
      opacity:0
    });
    tl.set(net, {
      y: window.screen.height*0.25,
      x: window.screen.width*0.06,
      opacity:0
    });
    tl.set(host, {
      y: window.screen.height*0.25,
      x: window.screen.width*0.06,
      opacity:0
    });
    tl.set(subnet1, {
      width: window.screen.width*0.9,
      x: window.screen.width*0.03,
      y: window.screen.height*0.33,
      opacity: 0
    });
    tl.set(subnet2, {
      width: window.screen.width*0.9,
      x: window.screen.width*0.03,
      y: window.screen.height*0.33,
      opacity:0
    });
    tl.set(bar1, {
      width: window.screen.width*0.65,
      height: window.screen.height*0.01,
      y: window.screen.height*0.5,
      x: window.screen.width*0.25*-1,
      opacity: 0
    });
    tl.set(bar2, {
      width: window.screen.width*0.65,
      height: window.screen.height*0.01,
      y: window.screen.height*0.5,
      x: window.screen.width*0.58,
      opacity: 0
    });
    tl.set(ip1, {
      x:window.screen.width*0.05,
      y:window.screen.height*0.25,
      opacity: 0
    });
    tl.set(ip2, {
      x:window.screen.width*0.67,
      y:window.screen.height*0.25,
      opacity:0
    });

    tl.add("step1");
    tl.call(function () {
      initialPopup(tl, $translate, $ionicPopup, $state, $scope, $compile, 'INFO', 'SUBNET_MASK_PRESENTATION_1');
    });
    tl.to('.animationFrame', 0.5, { x: 0 }); //dummy step - do not remove

    tl.to(ipRede, 1, show);
    tl.to('.animationFrame', 1, { x: 0 }); //dummy step - do not remove

    tl.add("step2");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNET_MASK_PRESENTATION_2', "step1", "step1");
    });
    tl.to('.animationFrame', 0.5, { x: 0 }); //dummy step - do not remove

    tl.add("step3");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNET_MASK_PRESENTATION_3', "step2", "step1");
    });
    tl.to('.animationFrame', 0.5, { x: 0 }); //dummy step - do not remove

    tl.to(whiteBoard, .5, show);
    tl.to(mask, .5, show);
    tl.to(convertingToBit, .5, show);
    
    tl.to(maskBit, 1, show);
    tl.to(maskBit1, 1, {css:{'font-weight': 600}});
    tl.to(thisBitAre, 1, show);
    tl.to(net, 1, show);
    tl.to(net, 1, hide);
    tl.to(thisBitAre, 1, hide);
    tl.to(maskBit1, 1, {css:{'font-weight': 500}});

    tl.to(maskBit2, 1, {css:{'font-weight': 600}});
    tl.to(thisBitAre, 1, show);
    tl.to(host, 1, show);
    tl.to(maskBit2, 1, {css:{'font-weight': 500}});
    tl.to(host, 1, hide);

    tl.to(thisBitAre, 0.1, hide);
    tl.to(maskBit, 0.1, hide);
    tl.to(convertingToBit, 0.1, hide);
    tl.to(mask, 0.1, hide);
    tl.to(whiteBoard, 0.1, hide);


    tl.add("step4");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNET_MASK_PRESENTATION_4', "step3", "step1");
    });
    tl.to('.animationFrame', 0.5, { x: 0 }); //dummy step - do not remove

    tl.to(subnet, .5, hide);
    tl.to(subnet1, .1, show);
    tl.to(subnet2, .1, show);
    tl.to(subnet1, 2, {x:window.screen.width*0.7*-1});
    tl.to(subnet2, 2, {x:window.screen.width*0.7});
    tl.to(bar1, .1, show);
    tl.to(bar2, .1, show);

    tl.to('.animationFrame', 3, { x: 0 }); //dummy step - do not remove
    

    tl.add("step5");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNET_MASK_PRESENTATION_5', "step4", "step1");
    });
    tl.to('.animationFrame', 0.5, { x: 0 }); //dummy step - do not remove

    tl.to(whiteBoard, 1, show);
    tl.to(newMask, 1, show);
    tl.to(convertingToBit, 1, show);
    tl.to(newMaskBit, 1, show);
    tl.to(maskBit1, 1, {css:{'font-weight': 600}})
    tl.to('.animationFrame', 2, { x: 0 }); //dummy step - do not remove
    tl.to(newMaskBit, 1, hide);
    tl.to(convertingToBit, 1, hide);
    tl.to(whiteBoard, 1, hide);
    
    tl.to(newMask, 1, {
      x:window.screen.width*0.3,
      y:window.screen.height*0.13
    });

    tl.to('.animationFrame', 2, { x: 0 }); //dummy step - do not remove

    tl.add("step6");
    tl.call(function () {
      commonPopup(tl, $scope, $compile, $translate, $ionicPopup, 'INFO', 'SUBNET_MASK_PRESENTATION_6', "step5", "step1");
    });
    tl.to('.animationFrame', 0.5, { x: 0 }); //dummy step - do not remove

    tl.to(ip1, 1, show);
    tl.to(ip2, 1, show);
    tl.to('.animationFrame', 2, { x: 0 }); //dummy step - do not remove

    tl.add("step7");
    tl.call(function () {
      endPopup(tl, $translate, $ionicPopup, $state, $scope, $compile, 'END', 'SUBNET_MASK_PRESENTATION_7', "step6", "step1");
    });


  });

function getPositionX(width) {
  var dif = window.screen.width - width;
  return dif / 2;
}

