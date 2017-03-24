Vue.component('celso-dog', {
  template:  `<div> 
                <select class='form-control'>
                   <option v-for='category in categories' v-bind:dto='category'> 
                      <b >{{ category.name }}</b> 
                   </option> 
                </select>    
              </div>` ,
  props: ['dto', 'categories'],
});

var vm = new Vue({
  el: '#cachorro',
  data: {
    categories: []
  }
});