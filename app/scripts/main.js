'use strict';

var StateFactory = require('./StateFactory.js');
var StateController = require('./StateController.js');
var ElemController = require('./ElemController.js');
var $ = require('jQuery');

var transitionTime = 2000;
var appState, fsm, stateController, elemController;

appState = new StateFactory(transitionTime);
fsm = appState.getFSM();

stateController = new StateController();
elemController = new ElemController();

appState.setTransitionTime(2000);
appState.setStateController(stateController);

stateController.setFSM(fsm);

$(document).ready(function() {
  stateController.onReady();
  elemController.onReady();
});

window.fsm = fsm;

// testing
var d = 0;
var c = [
  '  load',
  'load loaded',
  'loaded unload',
  'unload  '
];


setInterval(function (){
  if (d) {
    $('.header').toggleClass(c[(d - 1) % 4]);
    ++d;
  }
}, 3000);


// var sections = ['init', 'home', 'design', 'develop', 'deploy', 'resume'];

