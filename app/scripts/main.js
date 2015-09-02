'use strict';

var AppStateFactory = require('./AppStateFactory.js');

var transitionTime = 2000;

var appStateFactory = new AppStateFactory(transitionTime);
window.fsm = appStateFactory.getFSM();

// testing
var d = 0;
var c = [
  '  load',
  'load loaded',
  'loaded unload',
  'unload  '
];

var $ = require('jQuery');

setInterval(function (){
  if (d) {
    $('.header').toggleClass(c[(d - 1) % 4]);
    ++d;
  }
}, 3000);


// var sections = ['init', 'home', 'design', 'develop', 'deploy', 'resume'];

