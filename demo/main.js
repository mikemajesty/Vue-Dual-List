var VueDualList = require('../vue-dual-list.vue');
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

new Vue({
  el: '#vueduallist',
  name: 'vue-dual-list',
  data: () => {
    return {
      options: {
        label: 'Demo title',
        selectOptions: { uppercase: true, isRequired: false },
        buttonOption: { textLeft: 'Move All', textRight: 'Move All' },
        resizeBox: "md",
        items: [
          { 'category': 'ALUNDRA', 'name': 'Alundra' },
          { 'category': 'ALUNDRA', 'name': 'Jess' },
          { 'category': 'ALUNDRA', 'name': 'Meia' },
          { 'category': 'ALUNDRA', 'name': 'Melzas' },
          { 'category': 'ALUNDRA', 'name': 'Septimus' },

          { 'category': 'WILD ARMS', 'name': 'Rudy Roughknight' },
          { 'category': 'WILD ARMS', 'name': 'Jack Van Burace' },
          { 'category': 'WILD ARMS', 'name': 'Hanpan' },
          { 'category': 'WILD ARMS', 'name': 'Cecilia Adlehyde' },

          { 'category': 'CHRONO CROSS', 'name': 'Serge' },
          { 'category': 'CHRONO CROSS', 'name': 'Kid' },
          { 'category': 'CHRONO CROSS', 'name': 'Lynx' },
          { 'category': 'CHRONO CROSS', 'name': 'Harle' },

        ],
        colorItems: '#1E90FF',
        categories: [{ id: 'ALUNDRA', category: 'Alundra' }, { id: 'WILD ARMS', category: 'WILD ARMS' }, { id: 'CHRONO CROSS', category: 'CHRONO CROSS' }],
        selectedItems: []
      }
    };
  },
  components: {
    'VueDualList': VueDualList
  }
});
/**
var Vue = require('vue');
var App = require('./App.vue');

new Vue({
  el: '#vueduallist',
  components: { App: App }
});
 */