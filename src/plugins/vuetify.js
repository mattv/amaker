import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#003865',   // navy blue
        secondary: '#ff7500', // orange
        accent: '#00b5e2',    // light blue
      },
    },
  },
});
