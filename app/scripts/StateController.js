'use strict';

var StateController = function() {
  this.sections = ['init', 'index', 'design', 'develop', 'deploy', 'resume'];
  this.$ = require('jQuery');
  this.fsm = null;
  this.oldHash = window.location.hash;
};

StateController.prototype.setFSM = function(fsm) {
  this.fsm = fsm;
};

StateController.prototype.onReady = function() {
  // todo: open whatever in the hashtag
  // or trigger the onhashchange function
  this.fsm.open('index');
  this.bindEvents();
};

StateController.prototype.bindEvents = function() {
  var that = this;
  this.$(window).on('hashchange', function(event) {
    // instead of bind...
    that.onHashChange(event);
  });
  this.$('.print').on('click', function() {
    that.fsm.print();
  });
};

StateController.prototype.onHashChange = function() {
  var target = window.location.hash.replace('#', '');
  if(this.fsm.open(target) === true) {
    this.oldHash = '#' + target;
  } else {
    console.log('reset hash');
    window.location.hash = this.oldHash;
  }
};

StateController.prototype.onLoadingOpen = function(sectionID) {
  console.log('Loading.open:' + sectionID);
  console.log('".init" -> remove "loaded", add "unload"');
  console.log(sectionID + ' -> add "load"');

  if (!this.isValidSection(sectionID)) {
    return false;
  }

  this.$('.init').toggleClass('loaded unload');
  this.$('.' + sectionID).addClass('load');

  return true;
};

StateController.prototype.onInitComplete = function() {
  console.log('Init.complete');
  console.log('".init" -> remove "unload"');
  console.log('".load" -> remove "load", add "loaded"');

  this.$('.init').removeClass('unload');
  this.$('.load').toggleClass('load loaded');
};

StateController.prototype.onSectionLoadComplete = function() {
  console.log('SectionLoad.complete:');
  console.log('".load" -> remove "load", add "loaded"');

  this.$('.load').toggleClass('load loaded');
};

StateController.prototype.onSectionLoadedOpen = function(sectionID) {
  console.log('SectionLoaded.open:' + sectionID);
  console.log('".loaded" -> remove "loaded", add "unload"');
  console.log(sectionID + ' -> add "load"');

  if (!this.isValidSection(sectionID)) {
    return false;
  }

  this.$('.loaded').toggleClass('loaded unload');
  this.$('.' + sectionID).addClass('load');

  return true;
};

StateController.prototype.onSectionLoadedPrint = function() {
  window.print();
};

StateController.prototype.onSectionUnloadComplete = function() {
  console.log('SectionUnLoad.complete');
  console.log('".unload" -> remove "unload"');

  this.$('.unload').removeClass('unload');
};

StateController.prototype.onSectionLoadedOpenDlg = function() {

};

StateController.prototype.onDialogClose = function() {

};

StateController.prototype.isValidSection = function(sectionID) {
  if (this.sections.indexOf(sectionID) === -1) {
    return false;
  }
  if (this.$('.' + sectionID).hasClass('loaded')) {
    return false;
  }

  return true;
};

module.exports = StateController;