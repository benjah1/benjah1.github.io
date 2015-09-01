'use strict';

var AppStateFactory = function(appStateController, transitionTime) {
  var Stately = require('Stately');

  var appStateMachine = Stately.machine({
    Loading: {
      open: function(sectionID) {
        appStateController.onLoadingOpen(sectionID);

        setTimeout(function initCompleted() {
          console.log('DEBUG:: wait ' + transitionTime);
          // State can only be "Init"
          appStateMachine.complete();
        }, transitionTime);
        return this.Init;
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
        setTimeout(function sectionLoadCompleted() {
          console.log('DEBUG:: wait ' + transitionTime);
          // State can only be "SectionUnload"
          appStateMachine.complete();
          // State can only be "SectionLoad"
          appStateMachine.complete();
        }, transitionTime);

        appStateController.onSectionLoadedOpen(sectionID);
        return this.SectionUnload;
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

};

AppStateFactory.prototype.getFSM = function() {
  return this.fsm;
};

module.exports = AppStateFactory;
