/**
 * @see https://github.com/d2-projects/vue-filename-injector
 * @see https://vue-loader.vuejs.org/guide/custom-blocks.html#example
 */

const loaderPath = require.resolve('./loader')

module.exports = function (config, options) {
  config.module
    .rule("vue")
    .use("vue-filename-injector")
    .loader(loaderPath)
    .options(options)
    .after("vue-loader")
    .end();
};
