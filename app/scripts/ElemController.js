'use strict';

var ElemController = function() {
  this.$ = require('jQuery');
};

ElemController.prototype.onReady = function() {
  this.bindEvents();
};

ElemController.prototype.bindEvents = function() {
  //var that = this;

  // do anything not relative to state?
};

module.exports = ElemController;
