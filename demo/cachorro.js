Vue.component('celso-dog', {
  template: `<div class='excaliburduallist'> 
                <div class='row'>
                  <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <h4>
                        {{options.label}}
                      </h4>
                      <select class='form-control' v-model='search' v-bind:value='search'>
                        <option v-for='category in options.categories' v-bind:render='category'> 
                            <b >{{ category.name }}</b> 
                        </option> 
                      </select> 
                   </div> 
                  </div>
                </div>
                 <div class='row'>
                  <div class='col-lg-6 col-md-6 col-sm-6'>
                    <div class='row'>
                      <div class='col-lg-8 col-md-8 col-sm-8 pull-right'> 
                        <button type='button' class='btn btn-default btn-xs' v-on:click='transfer(options.items, options.selectedItems, -1)'> 
                          Move All -&#187; 
                        </button> 
                      </div>
                    </div>
                    <div class='list'>
                      <ul>
                        <li v-for='item in filtering'>
                          <a href='#' v-on:click='transfer(options.items, options.selectedItems, options.items.indexOf(item))'> 
                            <span> 
                              {{item.category}} -
                            </span>
                           {{item.name}}&nbsp;&rArr;</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class='col-lg-6 col-md-6 col-sm-6'>
                    <div class='row'>
                        <div class='col-lg-7 col-md-7 col-sm-7'> 
                          <button type='button' class='btn btn-default btn-xs pull-right' v-on:click='transfer(options.selectedItems, options.items, -1)'> 
                            &#171;- Move All 
                          </button> 
                        </div>
                    </div>
                    <div class='list'>
                      <ul>
                        <li v-for='item in options.selectedItems'> 
                          <a href='#' v-on:click='transfer(options.selectedItems, options.items, options.selectedItems.indexOf(item))'>
                             &lArr;&nbsp;{{item.category}} - {{item.name}}
                          </a> 
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>`,
  props: {
    'options': {
      type: Object,
      default: {},
      required: true
    }
  },
  data: function() {
    return {
      search: ''
    };
  },
  methods: {
    transfer: function(current, to, index) {
      if (index >= 0) {
        to.push(current[index]);
        current.splice(index, 1);
      } else {
        for (var cont = 0; cont < current.length; cont++) {
          to.push(current[cont]);
        }
        current.length = 0;
      }
    }
  },
  computed: {
    filtering: function() {
      if(this.search) {
        return this.options.items.filter((item) => {
          return item.category.toLowerCase() === this.search.toLowerCase();
        });
      }
      return this.options.items;
    }
  }
});

var vm = new Vue({
  el: '#cachorro',
  data: function() {
    return {
      options: {
        label: 'Demo title',
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
        categories: [{ name: 'ALUNDRA' }, { name: 'WILD ARMS' }, { name: 'CHRONO CROSS' }],
        selectedItems: []
      }
    };
  }
});