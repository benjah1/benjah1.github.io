'use strict';

var AppStateController = function() {

};

AppStateController.prototype.onLoadingOpen = function(sectionID) {
  console.log('Loading.open:' + sectionID);
  console.log('".init" -> remove "loaded", add "unload"');
  console.log(sectionID + ' -> add "load"');
};

AppStateController.prototype.onInitComplete = function() {
  console.log('Init.complete');
  console.log('".init" -> remove "unload"');
  console.log('".load" -> remove "load", add "loaded"');
};

AppStateController.prototype.onSectionLoadComplete = function() {
  console.log('SectionLoad.complete:');
  console.log('".load" -> remove "load", add "loaded"');
};

AppStateController.prototype.onSectionLoadedOpen = function(sectionID) {
  console.log('SectionLoaded.open:' + sectionID);
  console.log('".loaded" -> remove "loaded", add "unload"');
  console.log(sectionID + ' -> add "load"');
};

AppStateController.prototype.onSectionUnloadComplete = function() {
  console.log('SectionUnLoad.complete');
  console.log('".unload" -> remove "unload"');
};

AppStateController.prototype.onSectionLoadedOpenDlg = function() {

};

AppStateController.prototype.onDialogClose = function() {

};

module.exports = AppStateController;
