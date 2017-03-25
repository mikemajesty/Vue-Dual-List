Vue.component('celso-dog', {
  template:  `<div class='excaliburduallist'> 
                <div class='row'>
                  <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <h4>
                        {{options.label}}
                      </h4>
                      <select class='form-control'>
                        <option v-for='category in options.categories' v-bind:dto='category'> 
                            <b >{{ category.name }}</b> 
                        </option> 
                      </select> 
                   </div> 
                  </div>   
                </div>  
              </div>` ,
  props: ['dto', 'options'],
});

var vm = new Vue({
  el: '#cachorro',
  data: {
    options: {
      label: "Demo title",
      categories: [{name: 'FF7'}, {name: 'FF8'}, {name: 'FF9'}]
    } 
  }
});