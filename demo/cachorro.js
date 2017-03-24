Vue.component('celso-dog', {
  template:  "<div> <select  v-on:click='change' class='form-control'> <option v-for='category in categories' v-bind:category='category'> <b >{{ category.text }}</b> </option> </select>    </div>" ,
  props: ['category'],
  data: function () {
    return {
      categories: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }]
    };
  },
  methods: {
    change: function () {
      console.log('choose');
    }
  }
});

var app4 = new Vue({
  el: '#cachorro',
  data: {
    categories: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});