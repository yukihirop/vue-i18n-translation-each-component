const VueFilenameInjector = require("./vue-config/vue-filename-injector");

module.exports = {
  chainWebpack: (config) => {
    VueFilenameInjector(config, {
      propName: "__source",
    });
  },
};
