Vue.component('celso-dog', {
  template: `<div class='excaliburduallist'> 
                <div class='row'>
                  <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <h4>
                        {{options.label}}
                      </h4>
                      <select class='form-control' v-model='search' v-bind:value='search'>
                        <option :value="options.selectOptions.initialValue" :disabled="options.selectOptions.isDisable" v-if="options.selectOptions && options.selectOptions.initialText">{{options.selectOptions.initialText}}</option> 
                        <option v-for='category in options.categories' v-bind:render='category'> 
                            <b >{{ options.selectOptions.uppercase ? category.name.toUpperCase() : category.name}}</b> 
                        </option> 
                      </select> 
                   </div> 
                  </div>
                </div>
                 <div class='row'>
                  <div class='col-lg-6 col-md-6 col-sm-6'>
                    <div class='row'>
                      <div class='col-lg-8 col-md-8 col-sm-8 pull-right'> 
                        <button type='button' class='btn btn-default btn-xs' v-on:click='transferToRight(-1)'> 
                          Move All -&#187; 
                        </button> 
                      </div>
                    </div>
                    <div class='list'>
                      <ul>
                        <li v-for='item in filtering'>
                          <a href='#' v-on:click='transferToRight(options.items.indexOf(item))'> 
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
                          <button type='button' class='btn btn-default btn-xs pull-right' v-on:click='transferToLeft(-1)'> 
                            &#171;- Move All 
                          </button> 
                        </div>
                    </div>
                    <div class='list'>
                      <ul>
                        <li v-for='item in options.selectedItems'> 
                          <a href='#' v-on:click='transferToLeft(options.selectedItems.indexOf(item))'>
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
    transferToRight: function (index) { 
      if (index >= 0) {
        this.options.selectedItems.push(this.options.items[index]);
        this.options.items.splice(index, 1);
      } else {
        for (var cont = 0; cont < this.options.items.length; cont++) {
          this.options.selectedItems.push(this.options.items[cont]);
        }
        this.options.items.length = [];
        this.search = "";
      }
    },
     transferToLeft: function(index) {
      if (index >= 0) {
        this.options.items.push(this.options.selectedItems[index]);
        this.options.selectedItems.splice(index, 1);
      } else {
        for (var cont = 0; cont < this.options.selectedItems.length; cont++) {
          this.options.items.push(this.options.selectedItems[cont]);
        }
        this.options.selectedItems = [];
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
  data: () => {
    return {
      options: {
        label: 'Demo title',
        selectOptions: { initialText: 'SELECT', initialValue: "", isDisable: false, uppercase: true},
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