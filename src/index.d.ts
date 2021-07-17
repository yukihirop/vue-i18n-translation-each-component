import VueI18n from "vue-i18n";

declare class VueI18nExt extends VueI18n {
  et(key: VueI18n.Path, values?: VueI18n.values): VueI18n.TranslateResult;
}

/**
 * @see https://v3.vuejs.org/guide/typescript-support.html#augmenting-types-for-globalproperties
 */
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $et: typeof VueI18nExt.prototype.et;
  }
}
