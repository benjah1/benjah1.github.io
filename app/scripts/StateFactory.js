'use strict';

var StateFactory = function() {
  this.transitionTime = 1000;
  this.stateController = null;
  this.fsm = null;
};

StateFactory.prototype.getFSM = function() {
  if (this.fsm) {
    return this.fsm;
  }

  var Stately = require('Stately');
  var that = this;
  this.fsm = Stately.machine({
    Loading: {
      open: function(sectionID) {
        if (that.stateController.onLoadingOpen(sectionID)) {
          setTimeout(function initCompleted() {
            console.log('DEBUG:: wait ' + that.transitionTime);
            // State can only be "Init"
            that.fsm.complete();
          }, that.transitionTime);
          return [this.Init, true];
        }
        // todo: throw error
        return [this.Loading, false];
      }
    },
    Init: {
      complete: function() {
        that.stateController.onInitComplete();
        return this.SectionLoaded;
      }
    },
    SectionLoad: {
      complete: function() {
       that.stateController.onSectionLoadComplete();
        return this.SectionLoaded;
      }
    },
    SectionLoaded: {
      open: function(sectionID) {
        if (that.stateController.onSectionLoadedOpen(sectionID)) {
          setTimeout(function sectionLoadCompleted() {
            console.log('DEBUG:: wait ' + that.transitionTime);
            // State can only be "SectionUnload"
            that.fsm.complete();
            // State can only be "SectionLoad"
            that.fsm.complete();
          }, that.transitionTime);
          return [this.SectionUnload, true];
        }
        return [this.SectionLoaded, false];
      },
      openDlg: function(dlgID) {
        console.log(dlgID);
        that.stateController.onSectionLoadedOpenDlg();
        return this.Dialog;
      },
      print: function() {
        that.stateController.onSectionLoadedPrint();
      }
    },
    SectionUnload: {
      complete: function() {
        that.stateController.onSectionUnloadComplete();
        return this.SectionLoad;
      }
    },
    Dialog: {
      close: function() {
        that.stateController.onDialogClose();
        return this.SectionLoad;
      }
    }
  }).bind(function bindEvent(event, oldState, newState) {
    console.log('DEBUG:: ' + oldState + '=>' + newState);
  });

  return this.fsm;
};

StateFactory.prototype.setStateController = function(stateController) {
  this.stateController = stateController;
};

StateFactory.prototype.setTransitionTime = function(transitionTime) {
  this.transitionTime = transitionTime;
};

module.exports = StateFactory;
