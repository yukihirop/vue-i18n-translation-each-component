import i18n from "@/locales";
import { getCurrentInstance } from "vue";

/**
 * @see https://github.com/vuejs/vue-devtools/blob/8e42bfec667489bb52e13b9885c1e684e0f1cc2a/src/backend/index.js#L328
 * @see https://github.com/d2-projects/vue-filename-injector
 * @see https://v3.vuejs.org/guide/typescript-support.html#augmenting-types-for-globalproperties
 */
export default {
  install(app: any, _options: any) {
    app.use(i18n);
    app.config.globalProperties.$et = function (key: string, options: any) {
      const vm = getCurrentInstance()!.proxy!;
      const fn = vm.$t.bind(this);
      //「vue-filename-injector」 sets $options.__source to file path to itself at compile time
      console.log(vm.$options);
      // const compPath = vm.$options.__source.replace(/\.[^/.]+$/, "");

      const compPath = "hoge";

      return fn(`${compPath}.${key}`, options);
    };
  },
};
