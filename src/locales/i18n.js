import { createI18n } from "vue-i18n";
import en from "../locales/translations/en.json";
import ru from "../locales/translations/ru.json";

const i18n = createI18n({
    locale: "en",
    messages: {
        en: en,
        ru: ru,
    },
});

export default i18n;