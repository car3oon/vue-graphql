import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import pl from "vuetify/src/locale/pl";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  iconfont: "md",
  lang: {
    locales: { pl },
    current: "pl"
  },
  theme: {
    primary: colors.teal.lighten1,
    secondary: colors.teal.lighten3,
    accent: colors.red.accent2,
    error: colors.red.darken2,
    warning: colors.orange.base,
    info: colors.blue.base,
    success: colors.green.darken3
  }
});
