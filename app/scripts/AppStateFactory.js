'use strict';

var AppStateFactory = function(transitionTime) {
  var Stately = require('Stately');
  var StateController = require('./AppStateController.js');
  var appStateController;

  var fsm = Stately.machine({
    Loading: {
      open: function(sectionID) {
        if (appStateController.onLoadingOpen(sectionID)) {
          setTimeout(function initCompleted() {
            console.log('DEBUG:: wait ' + transitionTime);
            // State can only be "Init"
            fsm.complete();
          }, transitionTime);
          return this.Init;
        }
      }
    },
    Init: {
      complete: function() {
        appStateController.onInitComplete();
        return this.SectionLoaded;
      }
    },
    SectionLoad: {
      complete: function() {
       appStateController.onSectionLoadComplete();
        return this.SectionLoaded;
      }
    },
    SectionLoaded: {
      open: function(sectionID) {
        if (appStateController.onSectionLoadedOpen(sectionID)) {
          setTimeout(function sectionLoadCompleted() {
            console.log('DEBUG:: wait ' + transitionTime);
            // State can only be "SectionUnload"
            fsm.complete();
            // State can only be "SectionLoad"
            fsm.complete();
          }, transitionTime);
          return this.SectionUnload;
        }
      },
      openDlg: function(dlgID) {
        console.log(dlgID);
        appStateController.onSectionLoadedOpenDlg();
        return this.Dialog;
      }
    },
    SectionUnload: {
      complete: function() {
        appStateController.onSectionUnloadComplete();
        return this.SectionLoad;
      }
    },
    Dialog: {
      close: function() {
        appStateController.onDialogClose();
        return this.SectionLoad;
      }
    }
  }).bind(function bindEvent(event, oldState, newState) {
    console.log('DEBUG:: ' + oldState + '=>' + newState);
  });

  appStateController = new StateController(fsm);
  this.fsm = fsm;
};

AppStateFactory.prototype.getFSM = function() {
  return this.fsm;
};

module.exports = AppStateFactory;
