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

data.en.nav = [
  'Design',
  'Develop',
  'Deploy',
  'Resume'
];
data.cn.nav = data.en.nav;

data.en.social = [{
  name: 'Github',
  link: ''
}, {
  name: 'LinkedIn',
  link: ''
}, {
  name: 'Twitter',
  link: ''
}];

data.cn.social = data.en.social;


/**
 * Sections
 */
data.en.sections = [];

var secDesignEn = {
  title: 'Desgin',
  attr: {
    'class': ''
  },
  contents: [{
    title: 'System Design',
    contents: [
      'Design system in Multi-tier Architecture. Focus on creating flexible and reusable components.',
      'Design for Scalability. Experience in decide and apply vertical scale and horizontal scale.',
      'For legacy system, Refactoring to create modular components.'
    ]
  }, {
    title: 'Design Pattern',
    contents: [
      'Proficient with GoF design patterns in practise.',
      'Strictly follow the SOLID principle.',
      'Use Abstraction to managing complexity of the system.'
    ]
  }, {
    // project
  }, {
    // figures
  }]
};

var secDevelopEn = {
  title: 'Develop',
  attr: {
    'class': ''
  },
  contents: [{
    title: 'Data Structure',
    contents: [
      'Master of all common data structure.',
      'Linear: Array, Stack, Queue, Linked List.',
      'Non-Linear: Hash, Heap, Binary Search Tree, Red-black Tree, Graph.'
    ]
  }, {
    title: 'Algorithm',
    contents: [
      'Familiar with applying or designing suitable algorithm.',
      'Proficient in using big O complexity to analyze performance.'
    ]
  }, {
    title: 'Language',
    contents: [
      'Zend certificate PHP engineer.',
      'Favorite and proficient in JavaScript.',
      'Able to process in any popular languages.'
    ]
  }, {
    // projects
  }, {
    // figures
  }]
};

var secDeployEn = {
  title: 'Deploy',
  attr: {
    'class': ''
  },
  contents: [{
    title: 'Build',
    contents: [
      'Build project with Jenkins, or Travis.',
      'Create build tasks with Grunt, Gulp or Make.',
      'Familiar with Pre-processing and Post-processing on source files and assists.'
    ]
  }, {
    title: 'Virtualization',
    contents: [
      'Create and maintain Vagrant and Docker.'
    ]
  }, {
    title: 'Administrative',
    contents: [
      'Proficient in using Linux. Familiar with Bash script.',
      'Proficient in setting up web service with Apache or Nginx.',
      'Experience in trouble-shooting networking issue.'
    ]
  }, {
    // projects
  }, {
    // figures
  }]
};



/**
 * Resume
 *
*/
var secResumeEn = {
  title: 'Resume',
  attr: {
    'class': ''
  },
  contents: []
};

var resTechEn = {
  title: 'Technical Skills',
  contents: [{
    title: 'Languages',
    contents: ['PHP (ZEND022796)', 'JavaScript', 'CSS', 'Sass', 'SQL', 'UML']
  }, {
    title: 'Tools',
    contents: ['Git', 'Vagrant', 'Grunt', 'Gulp', 'Yeoman', 'ESLint', 'PHPunit', 'Mocha', 'PostCss']
  }, {
    title: 'Libraries',
    contents: ['Zend Framework', 'WordPress', 'jQuery', 'Angular', 'Bootstrap']
  }, {
    title: 'Techniques',
    contents: ['Data structure', 'Algorithm', 'Design Pattern', 'OOP', 'Refactoring', 'Multilayer architecture', 'Scalability', 'Database', 'Web-relative protocol']
  }]
};

var resExprEn = {
  title: 'Work Experience',
  attr: {
    'class': 'work'
  },
  contents: [{
    title: 'Radii Production',
    meta: {
      time: '2010 - 2014'
    },
    contents: [
      'Web application architecting, development and maintenance',
      'Server management and shell scripting'
    ]
  }, {
    title: 'Synaptop',
    meta: {
      time: '2015'
    },
    contents: [
      'System architecting and lead development.',
      'Server administration.'
    ]
  }]
};

/**
 * Resume projects
 */
var resProjEn = {
  title: 'Projects of Interests',
  attr: {
    'class': 'proj'
  },
  contents: []
};

var projSynaptopEn = {
  title: 'Synaptop',
  contents: [{
    title: 'Development workflow',
    meta: {
      time: '2015'
    },
    contents: ['Created Linux development environment with Vagrant. Used Bash script to automate installation. Addressed the issue of leaking setup documentation and reduced setup cost from days to hours. Introduced pre-processing and post-processing for both PHP, JavaScript and CSS to improve team\'s coding quality. Set up tools like, Xdebug, Maildev and Redis Commander to improve debugging.']
  }, {
    title: 'Synaptube',
    meta: {
      time: '2015'
    },
    contents: ['Code refactoring for Web Socket based long distance video synchronization. Designed abstracted backend interface: Content interface, Oauth interface. Simple Restful API service for both web browser and mobile application. Designed web application frontend modules: Data module, Player module, Synchronize module, Page module. Build up the foundation for extendibility, code reuse and UI redesign.']
  }]
};

var projBgccEn = {
  title: 'Boys and Girls Clubs of Canada',
  contents: [{
    title: 'Rogers Raising the Grade',
    meta: {
      time: '2012 - 2014',
    },
    contents: ['National bilingual educational community with BuddyPress. Designed Wordpress e-learning modules. I continued on supporting it after launch, and develop add-on features with third party systems such as OpenBadge, Fluidsurvey and Google Analytics API.']
  }, {
    title: 'School Cents Online Module',
    meta: {
      time: '2014'
    },
    contents: ['Highly interactive e-learning module built with Angular and Bootstrap. Designed Wordpress-Angular-Shortcode system, and CSS3 animate system which allow designer to focus on simple HTML for faster development.']
  }]
};

var projRadiiEn = {
  title: 'Radii Production',
  contents: [{
    title: 'Radii website',
    meta: {
      time: '2014'
    },
    contents: ['Business and blogging platform with WordPress. Designed highly end-user-friendly Bootstrap-supported editor, of which content is pre-compiled for search and performance, based on ACF (WordPress Advanced Custom Fields plugin).']
  }]
};

var projIlpaEn = {
  title: 'Institutional Limited Partners Association',
  contents: [{
    title: 'LPA Ratings Tool',
    meta: {
      time: '2011'
    },
    contents: ['International scorecard web app. Designed a system that supports conditional questions, Ajax instant saves and scoring system. I led a team of 3 members to implement it. After launched, I continued on supporting it, and developed add-on of third party portal access for temporary legal counsels.']
  }, {
    title: 'GP Economics Application',
    meta: {
      time: '2012'
    },
    contents: ['Excel base international business analysis app. Designed an engine with an optimized excel, and integrated data with Google chart for visual data analysis. I led a team of 5 members to develop and launch it in limited time.']
  }]
};

var projPersonalEn = {
  title: 'Personal',
  contents: [{
    title: 'Christmas card series',
    meta: {
      time: '2010 - Present'
    },
    contents: ['Building 3D holiday card with transform, transition and animation to demonstrate 3D modelling with animation in HTML.']
  }, {
    title: 'Android Apps',
    contents: ['Created and published 7 Android apps in HTML-based with phoneGap or native JAVA-based with SDK for exercising.']
  }, {
    title: 'Event Organizer',
    meta: {
      time: '2014 - 2015'
    },
    contents: ['Organizing study and hangout events on a weekly basis in a programmer’s community.']
  }]
};

resProjEn.contents.push(projSynaptopEn, projBgccEn, projRadiiEn, projIlpaEn, projPersonalEn);

secResumeEn.contents.push(resTechEn, resExprEn, resProjEn);

data.en.sections.push(secDesignEn, secDesignEn, secDeployEn, secResumeEn);

module.exports = data;
