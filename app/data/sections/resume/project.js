var fresh = require('fresh-require');

var synaptop = fresh('./projects/synaptop.js', require);
var bgcc = fresh('./projects/bgcc.js', require);
var radii = fresh('./projects/radii.js', require);
var ilpa = fresh('./projects/ilpa.js', require);
var personal = fresh('./projects/personal.js', require);

var resProjEn = {
  title: 'Projects of Interests',
  attr: {
    'class': 'proj'
  },
  contents: [
    synaptop.en,
    bgcc.en,
    radii.en,
    ilpa.en,
    personal.en
  ]
};

var resProjCn = {
  title: 'Projects of Interests',
  attr: {
    'class': 'proj'
  },
  contents: [
    synaptop.cn,
    bgcc.cn,
    radii.cn,
    ilpa.cn,
    personal.cn
  ]
};

module.exports = {
  en: resProjEn,
  cn: resProjCn
};
