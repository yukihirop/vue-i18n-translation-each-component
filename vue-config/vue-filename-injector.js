/**
 * @see https://github.com/d2-projects/vue-filename-injector
 * @see https://vue-loader.vuejs.org/guide/custom-blocks.html#example
 */

const loaderUtils = require("loader-utils");
const blockName = "vue-filename-injector";
const defaultPropName = "__source";

const loader = (content) => {
  const loaderContext = this;

  const { rootContext, resourcePath } = loaderContext;

  const context = rootContext || process.cwd();
  const options = loaderUtils.getOptions(loaderContext) || {};
  const rawShortFilePath = path
    .relative(context, resourcePath)
    .replace(/^(\.\.[\/\\])+/, "");

  const propName = options.propName || defaultPropName;

  content += `
<${blockName}>
export default function (Component) {
  Component.$options.${propName} = ${JSON.stringify(
    rawShortFilePath.replace(/\\/g, "/")
  )}
}
</${blockName}>
`;
  
  return content;
};

module.exports = function (config, options) {
  config.module
    .rule("vue")
    .use("vue-filename-inejector")
    .loader(loader)
    .options(options)
    .after("vue-loader")
    .end();
}
