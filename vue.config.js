const VueFilenameInjector = require("./vue-config/vue-filename-injector");
// const VueFilenameInjector = require("@d2-projects/vue-filename-injector");

module.exports = {
  chainWebpack: (config) => {
    VueFilenameInjector(config, {
      propName: "__source",
    });
  },
};
