var transitionTime = 1000;

var d = 0;
var c = [
  '  load',
  'load loaded',
  'loaded unload',
  'unload  '
];
setInterval(function (){
  if (d) {
    $('.header').toggleClass(c[(d-1)%4]);
    ++d;
  }
}, 3000);

var appState = Stately.machine({
  Loading: {
    open: function(sectionID) {
      console.log('Loading.open:' + sectionID);
      console.log('body -> remove "init"');
      console.log(sectionID + ' -> add "load"');
      return this.SectionLoad;
    }
  },
  SectionLoad: {
    complete: function() {
      return this.SectionLoaded;
    }
  },
  SectionLoaded: {
    open: function(sectionID) {
      var that = this;
      setTimeout(function complete(){
        appState.open(sectionID);
      }, transitionTime);

      console.log('SectionLoaded.open:' + sectionID);
      console.log(sectionID + ' -> add "load"');
      return this.SectionUnload;
    },
    openDlg: function(dlgID) {
      console.log(dlgID);
      return this.Dialog;
    }
  },
  SectionUnload: {
    open: function(sectionID) {
      console.log('SectionUnLoad.open:' + sectionID);
      console.log('".loaded" -> remove "loaded", add "unload"');
      return this.SectionLoad;
    }
  },
  Dialog: {
    close: 'SectionLoad'
  }
}).bind(function bindEvent(event, oldState, newState) {
  console.log('Transition (info only now)');
  console.log(oldState + '=>' + newState);
});

appState.onenterSectionLoad = function() {
  setTimeout(function complete() {
    appState.complete();
  }, transitionTime);
};

appState.onenterSectionLoaded = function() {
  console.log('onenterSectionLoaded');
  console.log('".unload" -> remove "unload"');
  console.log('".load" -> remove "load", add "loaded"');
};

var sections = ['loading', 'home', 'design', 'develop', 'deploy', 'resume'];

var sectionState;

var dlgState;
