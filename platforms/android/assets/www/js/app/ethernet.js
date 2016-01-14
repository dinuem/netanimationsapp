angular.module('netanimations.ethernet', [])
.controller('EthernetCtrl', function($scope, $ionicPopup, $translate) {
  TweenLite.defaultEase = Power1.easeInOut;
  $scope.end = false;
  var segment1 = "#segment-1";
  var segment2 = "#segment-2";
  var segment3 = "#segment-3";
  var ear1 = "#ear-1";
  var ear2 = "#ear-2";
  var ear3 = "#ear-3";
  var trash1= "#trash-1";
  var trash2= "#trash-2";
  var collision1 = "#collision-1";
  var collision2 = "#collision-2";
  var patternHeight = 595;
  var patternWidth = 350;
  var width = window.innerWidth;
  var height = window.innerHeight - 44; // 44 é a altura do header, que deve ser desconsiderado
  var boxWidth = transform(patternHeight, patternWidth, height, width, 40, 'x', true);
  var boxHeight = transform(patternHeight, patternWidth, height, width, 34, 'y', true);
  var earWidth = transform(patternHeight, patternWidth, height, width, 60, 'x', true);
  var earHeight = transform(patternHeight, patternWidth, height, width, 60, 'y', true);
  var trashWidth = transform(patternHeight, patternWidth, height, width, 60, 'x', true);
  var trashHeight = transform(patternHeight, patternWidth, height, width, 60, 'y', true);
  var collisionWidth = transform(patternHeight, patternWidth, height, width, 40, 'x', true);
  var collisionHeight = transform(patternHeight, patternWidth, height, width, 34, 'y', true);

  var segInitialLeft = window.innerWidth / 2;
  var segHostATop = transform(patternHeight, patternWidth, height, width, 59, 'y', false);
  var segHostBTop = transform(patternHeight, patternWidth, height, width, 243, 'y', false);
  var segHorizontalCrossing = transform(patternHeight, patternWidth, height, width, 102, 'x', false);
  var segVerticalDownCrossing = transform(patternHeight, patternWidth, height, width, 178, 'y', false);
  var segVerticalUpCrossing = transform(patternHeight, patternWidth, height, width, 184, 'y', false);
  var segDiscard = transform(patternHeight, patternWidth, height, width, 50, 'y', false);
  var earLeft = transform(patternHeight, patternWidth, height, width, 130, 'x', true);
  var ear1Top = transform(patternHeight, patternWidth, height, width, 40, 'y', false);
  var ear2Top = transform(patternHeight, patternWidth, height, width, 230, 'y', false);
  var ear3Top = transform(patternHeight, patternWidth, height, width, 410, 'y', false);
  var trashsLeft = transform(patternHeight, patternWidth, height, width, 175, 'x', false);
  var trash2Top = transform(patternHeight, patternWidth, height, width, 180, 'y', false);

  var rotate90 = {rotation: 90};
  var rotate0 = {rotation: 0};

  var tl = new TimelineMax();

  $scope.restart = function () {
    tl.seek(0);
    $scope.end = false;
  };

  //initializing objects
  tl.set(segment1,{height:boxHeight});
  tl.set(segment1,{width:boxWidth});
  tl.set(segment1,{autoAlpha:0});
  tl.set(segment2,{height:boxHeight});
  tl.set(segment2,{width:boxWidth});
  tl.set(segment2,{autoAlpha:0});
  tl.set(segment3,{height:boxHeight});
  tl.set(segment3,{width:boxWidth});
  tl.set(segment3,{autoAlpha:0});
  tl.set(ear1,{height:earHeight});
  tl.set(ear1,{width:earWidth});
  tl.set(ear1,{autoAlpha:0});
  tl.set(ear2,{height:earHeight});
  tl.set(ear2,{width:earWidth});
  tl.set(ear2,{autoAlpha:0});
  tl.set(ear3,{height:earHeight});
  tl.set(ear3,{width:earWidth});
  tl.set(ear3,{autoAlpha:0});
  tl.set(trash1,{width: trashWidth, height: trashHeight, left: trashsLeft, autoAlpha:0});
  tl.set(trash2,{width: trashWidth, height: trashHeight, left: trashsLeft, top: trash2Top, autoAlpha:0});
  tl.set(collision1,{height:collisionHeight, width: collisionWidth, autoAlpha:0});
  tl.set(collision2,{height:collisionHeight, width: collisionWidth, autoAlpha:0});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_1']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_1
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_2']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_2
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_3']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_3
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_4']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_4
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //putting segment1 in hostA's adapter
  tl.set(segment1,{top:segHostATop});
  tl.set(segment1,{left:segInitialLeft});
  tl.to(segment1,1,{autoAlpha:1});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_5']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_5
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_6']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_6
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //Host A preparing to send and Host B sending first
  tl.set(ear1,{top:ear1Top,left:earLeft});
  tl.set(ear2,{top:ear2Top,left:earLeft});
  tl.set(ear3,{top:ear3Top,left:earLeft});
  animateListen(tl,ear1,ear2,ear3,1);
  tl.set(segment2,{top:segHostBTop, left:segInitialLeft});
  tl.set(segment3,{top:segHostBTop, left:segInitialLeft});
  tl.to(segment2,1,{autoAlpha:1});
  tl.to(segment3,1,{autoAlpha:1,delay:-1});
  tl.to(segment2,1.5,{left:"+="+segHorizontalCrossing});
  tl.to(segment3,1.5,{left:"+="+segHorizontalCrossing,delay:-1.5});
  tl.to(segment2,1.5,{top:"+="+segVerticalDownCrossing});
  tl.to(segment3,1.5,{top:"-="+segVerticalUpCrossing,delay:-1.5});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_7']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_7
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //sending packages of host B and discarding from host A
  tl.to(segment1,1,{autoAlpha:0});
  tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing});
  tl.to(segment3,1.5,{left:"-="+segHorizontalCrossing,delay:-1.5});
  tl.to(trash1,1.5,{autoAlpha:1, delay:-1.5});
  tl.to(segment3,1,{top:"-="+segDiscard});
  tl.to(segment3,1,{autoAlpha:0});
  tl.to(segment2,1,{autoAlpha:0,delay:-1});
  tl.to(trash1,1,{autoAlpha:0,delay:-1});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_8']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_8
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_9']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_9
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //sending from host A to host C
  tl.to(segment1,1,{autoAlpha:1});
  tl.to(segment1,1.5,{left:"+="+segHorizontalCrossing});
  tl.to(segment1,1.5,{top:"+="+segVerticalUpCrossing});
  tl.set(segment2,{top:segVerticalUpCrossing+segHostATop,
    left:segInitialLeft+segHorizontalCrossing,
    autoAlpha:1});
  tl.to(segment1,1.5,{top:"+="+segVerticalDownCrossing});
  tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing, delay:-1.5});
  tl.to(segment1,1.5,{left:"-="+segHorizontalCrossing});
  tl.to(trash2,1.5,{autoAlpha:1,delay:-1.5});
  tl.to(segment2,1,{top:"-="+segDiscard});
  tl.to(segment1,1,{autoAlpha:0,delay:-1});
  tl.to(segment2,1,{autoAlpha:0});
  tl.to(trash2,1,{autoAlpha:0,delay:-1});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_10']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_10
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_11']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_11
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //putting segment1 in hostA's adapter
  tl.set(segment1,{top:segHostATop});
  tl.set(segment1,{left:segInitialLeft});
  tl.to(segment1,1,{autoAlpha:1});
  tl.to(segment1,1.5,{left:"+="+segHorizontalCrossing});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_12']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_12
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //crashing frame from host A and B
  tl.set(segment2,{top:segHostBTop, left:segInitialLeft});
  tl.to(segment2,0.5,{autoAlpha:1});
  tl.to(segment1,1.5,{top:"+="+segVerticalUpCrossing});
  tl.to(segment2,1.5,{left:"+="+segHorizontalCrossing,delay:-1.5});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_13']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_13
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //throwing out the crashed frames
  tl.to(trash2,0.5,{autoAlpha:1});
  tl.to(segment1,1.5,{top:trash2Top,left:trashsLeft,delay:-0.5});
  tl.to(segment2,1.5,{top:trash2Top,left:trashsLeft,delay:-1.2});
  tl.set(trash2,{autoAlpha:0});
  tl.set(segment1,{autoAlpha:0});
  tl.set(segment2,{autoAlpha:0});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_14']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_14
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //Host B sends a collision signal
  tl.set(collision1,{top:segHostBTop, left: segInitialLeft});
  tl.to(collision1,0.5,{autoAlpha:1});
  tl.to(collision1,1.5,{left:"+="+segHorizontalCrossing});
  tl.set(collision2,{top:segHostBTop, left:segInitialLeft+segHorizontalCrossing, autoAlpha:1});
  tl.to(collision1,1.5,{top:"-="+segVerticalUpCrossing});
  tl.to(collision2,1.5,{top:"+="+segVerticalDownCrossing,delay:-1.5});
  tl.to(collision1,1.5,{left:"-="+segHorizontalCrossing});
  tl.to(collision2,1.5,{left:"-="+segHorizontalCrossing,delay:-1.5});
  tl.to(collision1,0.5,{autoAlpha:0});
  tl.to(collision2,0.5,{autoAlpha:0, delay:-0.5});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_15']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_15
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_16']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_16
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //correct Host A's transmission
  tl.set(segment1,{top:segHostATop, left: segInitialLeft});
  tl.to(segment1,0.5,{autoAlpha:1});
  tl.to(segment1,1.5,{left:"+="+segHorizontalCrossing});
  tl.to(segment1,1.5,{top:"+="+segVerticalUpCrossing});
  tl.set(segment2,{top:segVerticalUpCrossing+segHostATop,
    left:segInitialLeft+segHorizontalCrossing,
    autoAlpha:1});
  tl.to(segment1,1.5,{top:"+="+segVerticalDownCrossing});
  tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing, delay:-1.5});
  tl.to(segment1,1.5,{left:"-="+segHorizontalCrossing});
  tl.to(trash2,1.5,{autoAlpha:1,delay:-1.5});
  tl.to(segment2,1,{top:"-="+segDiscard});
  tl.to(segment1,1,{autoAlpha:0,delay:-1});
  tl.to(segment2,1,{autoAlpha:0});
  tl.to(trash2,1,{autoAlpha:0,delay:-1});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_17']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_17
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //correct Host B's transmission
  tl.set(segment2,{top:segHostBTop, left:segInitialLeft});
  tl.set(segment3,{top:segHostBTop, left:segInitialLeft});
  tl.to(segment2,1,{autoAlpha:1});
  tl.to(segment3,1,{autoAlpha:1,delay:-1});
  tl.to(segment2,1.5,{left:"+="+segHorizontalCrossing});
  tl.to(segment3,1.5,{left:"+="+segHorizontalCrossing,delay:-1.5});
  tl.to(segment2,1.5,{top:"+="+segVerticalDownCrossing});
  tl.to(segment3,1.5,{top:"-="+segVerticalUpCrossing,delay:-1.5});
  tl.to(segment2,1.5,{left:"-="+segHorizontalCrossing});
  tl.to(segment3,1.5,{left:"-="+segHorizontalCrossing,delay:-1.5});
  tl.to(trash1,0.5,{autoAlpha:1,delay:-1.5});
  tl.to(segment3,1,{top:"-="+segDiscard});
  tl.to(segment2,0.5,{autoAlpha:0});
  tl.to(trash1,0.5,{autoAlpha:0,delay:-0.5});

  tl.call(function() {
    tl.pause();
    $translate(['INFO', 'ETHERNET_PRESENTATION_18']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.INFO,
        template: translations.ETHERNET_PRESENTATION_18
      }).then(function() {
        tl.resume();
      });
    });
  });
  tl.to('.animationFrame', 0.5, {x: 0}); //dummy step - do not remove

  //end
  tl.call(function() {
    $translate(['END', 'ANIMATION_END']).then(function(translations) {
      $ionicPopup.alert({
        title: translations.END,
        template: translations.ANIMATION_END
      });
    });
  });

  $scope.end = true;
});

function transform(patternHeight, patternWidth, realHeight, realWidth, value, coordinate, isSize){
  var patternAspectRatio = patternWidth/patternHeight;
  if (coordinate == 'x'){
    var consideredWidth = realHeight * patternAspectRatio;
    var newValue = (value * consideredWidth) / patternWidth;
    if(consideredWidth < realWidth && !isSize){
      return (((realWidth - consideredWidth) / 2) + newValue);
    } else{
      return newValue;
    }
  } else { //coordinate == 'y'
  return (value * (realHeight/patternHeight));
  }
}

function animateListen(tl,ear1,ear2,ear3,alpha){
    tl.to(ear1,1,{autoAlpha:alpha});
    tl.to(ear2,1,{autoAlpha:alpha,delay:-1});
    tl.to(ear3,1,{autoAlpha:alpha,delay:-1});
}