Vue.component('celso-dog', {
  template:  `<div class='excaliburduallist'> 
                <div class='row'>
                  <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <h4>
                        {{options.label}}
                      </h4>
                      <select class='form-control' v-model='search'>
                        <option v-for='category in options.categories' v-bind:dto='category'> 
                            <b >{{ category.name }}</b> 
                        </option> 
                      </select> 
                   </div> 
                  </div>
                </div>
                 <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="row">
                      <div class="col-lg-8 col-md-8 col-sm-8 pull-right"> 
                        <button type="button" class="btn btn-default btn-xs"> 
                          Move All -&#187; 
                        </button> 
                      </div>
                    </div>
                    <div class="list">
                      <ul>
                      
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="row">
                        <div class="col-lg-7 col-md-7 col-sm-7"> 
                          <button type="button" class="btn btn-default btn-xs pull-right"> 
                            &#171;- Move All 
                          </button> 
                        </div>
                    </div>
                    <div class="list">
                      <ul>
                      </ul>
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