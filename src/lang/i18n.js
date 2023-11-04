import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ro from "./ro.json";
import it from "./it.json";

const defaultLanguage = "ro";

export const languages = [
  {
    code: "en",
    name: "English",
    country_flag:
      "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg",
  },
  {
    code: "ro",
    name: "Romana",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/255px-Flag_of_Romania.svg.png",
  },
  {
    code: "it",
    name: " Italy",
    country_flag:
      "https://www.worldometers.info/img/flags/small/tn_it-flag.gif",
  },
];

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en,
  },
  ro: {
    translation: ro,
  },
  it: {
    translation: it,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
