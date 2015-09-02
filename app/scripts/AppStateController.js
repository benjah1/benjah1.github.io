'use strict';

var AppStateController = function(fsm) {
  this.sections = ['init', 'index', 'design', 'develop', 'deploy', 'resume'];
  this.$ = require('jQuery');
  this.$(document).ready(function() {
    fsm.open('index');
  });
};

AppStateController.prototype.onLoadingOpen = function(sectionID) {
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

AppStateController.prototype.onInitComplete = function() {
  console.log('Init.complete');
  console.log('".init" -> remove "unload"');
  console.log('".load" -> remove "load", add "loaded"');

  this.$('.init').removeClass('unload');
  this.$('.load').toggleClass('load loaded');
};

AppStateController.prototype.onSectionLoadComplete = function() {
  console.log('SectionLoad.complete:');
  console.log('".load" -> remove "load", add "loaded"');

  this.$('.load').toggleClass('load loaded');
};

AppStateController.prototype.onSectionLoadedOpen = function(sectionID) {
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

AppStateController.prototype.onSectionUnloadComplete = function() {
  console.log('SectionUnLoad.complete');
  console.log('".unload" -> remove "unload"');

  this.$('.unload').removeClass('unload');
};

AppStateController.prototype.onSectionLoadedOpenDlg = function() {

};

AppStateController.prototype.onDialogClose = function() {

};

AppStateController.prototype.isValidSection = function(sectionID) {
  if (this.sections.indexOf(sectionID) === -1) {
    return false;
  }
  if (this.$('.' + sectionID).hasClass('loaded')) {
    return false;
  }

  return true;
};

module.exports = AppStateController;
