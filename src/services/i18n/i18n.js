import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nConf from "./conf.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nConf);

export default i18n;