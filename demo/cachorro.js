Vue.component('celso-dog', {
  template:  `<div class='excaliburduallist'> 
                <row class='row'>
                  <select class='form-control'>
                    <option v-for='category in categories' v-bind:dto='category'> 
                        <b >{{ category.name }}</b> 
                    </option> 
                  </select>  
                </div>  
              </div>` ,
  props: ['dto', 'categories'],
});

var vm = new Vue({
  el: '#cachorro',
  data: {
    categories: [{name: 'FF7'}, {name: 'FF8'}, {name: 'FF9'}]
  }
});