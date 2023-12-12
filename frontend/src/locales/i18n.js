import { createI18n } from "vue-i18n";
import en from "../locales/translations/en.json";
import ru from "../locales/translations/ru.json";
import pl from "../locales/translations/pl.json";
import es from "../locales/translations/es.json";
import ro from "../locales/translations/ro.json";
import ge from "../locales/translations/ge.json";

const i18n = createI18n({
    locale: (localStorage.getItem("i18n") || "en"),
    messages: {
        en: en,
        ru: ru,
        pl: pl,
        es: es,
        ro: ro,
        ge: ge,
    },
});

export default i18n;