Vue.use(VueMaterial);

Vue.component('celso-dog', {
  template: `<md-layout md-gutter class='cachorro'>

                <md-layout md-flex-small="100" md-flex-medium="100" md-hide-xsmall>

                  <md-input-container v-if='options.selectOptions.isRequired' style='margin-bottom: 0px'>
                    <label for="filter">{{options.label}}</label>
                    <md-select name="filter" id="filter" v-model="search" required>
                      <md-option v-for='item in options.categories' :value='item.id'>
                         <b >{{ options.selectOptions.uppercase ? item.category.toUpperCase() : item.category}}</b> 
                      </md-option>
                    </md-select>
                  </md-input-container>

                  <md-input-container v-if='!options.selectOptions.isRequired' style='margin-bottom: 0px'>
                    <label for="filter">{{options.label}}</label>
                    <md-select name="filter" id="filter" v-model="search">
                      <md-option value=''></md-option>
                      <md-option v-for='item in options.categories' :value='item.id'>
                         <b >{{ options.selectOptions.uppercase ? item.category.toUpperCase() : item.category}}</b> 
                      </md-option>
                    </md-select>
                  </md-input-container>

                  <md-layout md-flex='50' md-align="center">
                    <md-button class="md-raised" v-on:click.native='transferToRight(options.items.indexOf(item))'>
                      {{options.buttonOption.textLeft}}
                      <md-icon style='padding-bottom: 4px;'>arrow_forward</md-icon>
                    </md-button>
                  </md-layout>

                  <md-layout md-flex='50' md-align="center">
                    <md-button class="md-raised" v-on:click.native='transferToLeft(-1)'>
                      <md-icon style='padding-bottom: 4px;'>arrow_back</md-icon>
                      {{options.buttonOption.textRight}}
                    </md-button>
                  </md-layout>

                  <md-layout md-flex class='list' v-bind:class="options.resizeBox">
                    <ul class='pd'>
                      <li v-for='item in filtering'>
                        <a href='#' v-on:click='transferToRight(options.items.indexOf(item))' v-bind:style="{ color: options.colorItems || '#1E90FF' }"> 
                          <span v-if='!search'> 
                            {{item.category}} -
                          </span>
                          {{item.name}}&nbsp;&rArr;</a>
                      </li>
                    </ul>
                  </md-layout>

                  <div style='padding-left: 10px'/>

                  <md-layout md-flex class='list' v-bind:class="options.resizeBox">
                    <ul class='pd'>
                      <li v-for='item in options.selectedItems'> 
                        <a href='#' v-on:click='transferToLeft(options.selectedItems.indexOf(item))' v-bind:style="{ color: options.colorItems || '#1E90FF'}">
                            &lArr;&nbsp;{{item.category}} - {{item.name}}
                        </a> 
                      </li>
                    </ul>
                  </md-layout>
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
      item: {}
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
        selectOptions: { uppercase: true, isRequired: false },
        buttonOption: { textLeft: 'Move All', textRight: 'Move All' },
        resizeBox: "md",
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
        colorItems: '#1E90FF',
        categories: [{ id: 'ALUNDRA', category: 'Alundra' }, { id: 'WILD ARMS', category: 'WILD ARMS' }, { id: 'CHRONO CROSS', category: 'CHRONO CROSS' }],
        selectedItems: []
      }
    };
  }
});