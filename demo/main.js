var VueDualList = require('../vue-dual-list.vue');
var VueMaterial = require('vue-material');

Vue.use(VueMaterial);

new Vue({
  el: '#vueduallist',
  name: 'vue-dual-list',
  data: function() {
    return {
      options: {
        label: 'Demo title',
        inputOptions: { uppercase: true, isRequired: false },
        buttonOption: { textLeft: 'Move All', textRight: 'Move All' },
        resizeBox: "md",
        items: [
          { 'id': '1', 'name': 'Alundra' },
          { 'id': '2', 'name': 'Jess' },
          { 'id': '3', 'name': 'Meia' },
          { 'id': '4', 'name': 'Melzas' },
          { 'id': '5', 'name': 'Septimus' },

          { 'id': '6', 'name': 'Rudy Roughknight' },
          { 'id': '7', 'name': 'Jack Van Burace' },
          { 'id': '8', 'name': 'Hanpan' },
          { 'id': '9', 'name': 'Cecilia Adlehyde' },

          { 'id': '10', 'name': 'Serge' },
          { 'id': '11', 'name': 'Kid' },
          { 'id': '12', 'name': 'Lynx' },
          { 'id': '13', 'name': 'Harle' },

        ],
        colorItems: '#1E90FF',
        selectedItems: []
      }
    };
  },
  components: {
    'VueDualList': VueDualList
  }
});