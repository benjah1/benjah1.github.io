var fresh = require('fresh-require');

var technique = fresh('./resume/technique.js', require);
var experience = fresh('./resume/experience.js', require);
var project = fresh('./resume/project.js', require);

var secResumeEn = {
  title: 'Resume',
  attr: {
    'class': ''
  },
  contents: [
    technique.en,
    experience.en,
    project.en
  ]
};

var secResumeCn = {
  title: 'Resume',
  attr: {
    'class': ''
  },
  contents: [
    technique.cn,
    experience.cn,
    project.cn
  ]
};

module.exports = {
  en: secResumeEn,
  cn: secResumeCn
};
