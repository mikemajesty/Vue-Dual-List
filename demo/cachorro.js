Vue.component('celso-dog', {
  template: '<div v-on:click="changeMessage">{{ message }}</div>',
  data: function () {
    return {
      message: "CELSÃO CACHORRO!!"
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "CELSÃO CHINES CACHORRO!!";
    }
  }
});

new Vue({
  el: '#example'
});