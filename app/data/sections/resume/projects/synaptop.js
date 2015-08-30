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

var projSynaptopCn = {};

module.exports = {
  en: projSynaptopEn,
  cn: projSynaptopCn
};
