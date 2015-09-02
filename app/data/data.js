var data = {}

data.en = {locale: 'en'};
data.cn = {locale: 'zh'};

/*
 * Data structure for scalable and tranlatable
 * obj <= {
 *   title: '',
 *   attr: {
 *     class: '',
 *   },
 *   meta: {
 *     time: '',
 *   },
 *   contents: [
 *     string|obj
 *   ]
 * }
 *
 * Convert to,
 *
 * <h2>[title]</h2> // display title. 2 is based on depth.
 * <ul [attr..]> // show attr
 *   <li class='[meta]'>[meta]</li> // loop all meta and show them
 *   <li>[obj|string]</li> // loop all content. plain string or nested obj.
 * </ul>
 */


/**
 * Info
 */
data.en.name = 'Zhibin Huang';
data.cn.name = '黄志斌';

data.en.title = 'Zhibin Huang - Senior PHP developer - Toronto Ontario';
data.cn.title = 'Zhibin Huang - PHP开发工程师 - Toronto Ontario';

data.en.header = 'I am a Developer';
data.cn.header = 'I am a Developer';

data.en.nav = [{
  name: 'Design',
  link: '#design',
  'class': 'inlink'
}, {
  name: 'Develop',
  link: '#develop',
  'class': 'inlink'
}, {
  name: 'Deploy',
  link: '#deploy',
  'class': 'inlink'
}, {
  name: 'Resume',
 'class': 'print'
}];
data.cn.nav = data.en.nav;

data.en.social = [{
  name: 'Github',
  'class': 'fa fa-fw fa-github',
  link: 'https://github.com/benjah1'
}, {
  name: 'LinkedIn',
  'class': 'fa fa-fw fa-linkedin',
  link: 'https://www.linkedin.com/pub/zhibin-huang/2a/28/726'
}, {
  name: 'Twitter',
  'class': 'fa fa-fw fa-twitter',
  link: 'https://twitter.com/@benjaH_1'
}];

data.cn.social = data.en.social;


/**
 * Sections
 */
var fresh = require('fresh-require');

var design = fresh('./sections/design.js', require);
var develop = fresh('./sections/develop.js', require);
var deploy = fresh('./sections/deploy.js', require);
var resume = fresh('./sections/resume.js', require);

data.en.sections = [
  design.en,
  develop.en,
  deploy.en,
  resume.en
];

module.exports = data;
