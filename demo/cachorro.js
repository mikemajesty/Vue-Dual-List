Vue.use(VueMaterial);

Vue.component('celso-dog', {
  template: `<md-layout md-gutter>
                <md-layout md-flex-small="100" md-flex-medium="100" md-hide-xsmall>
                  <md-input-container>
                    <label for="filter">{{options.label}}</label>
                    <md-select name="filter" id="filter" v-model="search">
                      <md-option v-for='item in options.categories' value='item.id'>
                         <b >{{ options.selectOptions.uppercase ? item.category.toUpperCase() : item.category}}</b> 
                      </md-option>
                    </md-select>
                  </md-input-container>
                </md-layout>
             </md-layout>`,
  props: {
    'options': {
      type: Object,
      default: {},
      required: true
    }
  },
  data: function() {
    return {
      search: '',
    };
  },
  methods: {
    transferToRight: function(index) {
      if (index >= 0) {
        this.options.selectedItems.push(this.options.items[index]);
        this.options.items.splice(index, 1);
      } else {
        for (var cont = 0; cont < this.options.items.length; cont++) {
          this.options.selectedItems.push(this.options.items[cont]);
        }
        this.options.items = [];
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
      if (this.search) {
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
        selectOptions: { uppercase: true },
        resizeBox: "lg",
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
        categories: [{ id:'ALUNDRA', category: 'Alundra' }, { id:'WILD ARMS', category: 'WILD ARMS' }, { id:'CHRONO CROSS', category: 'CHRONO CROSS' }],
        selectedItems: []
      }
    };
  }
});
//<v-select v-model='search' v-bind:label='options.label' v-bind:value='text' v-bind:items='options.categories'> </v-select>