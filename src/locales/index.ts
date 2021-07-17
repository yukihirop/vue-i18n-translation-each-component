import ja from "./config/ja";
import en from "./config/en";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "ja",
  messages: { ja, en },
});

export default i18n;
