var celsoDog = Vue.component('celso-dog', {
  name: 'celso-dog',
  template: `<v-container name='celso-dog' fluid="fluid"> 
                <v-row>
                   <v-col xs12="xs12">
                      <v-card class="primary">
                        <v-card-text>12</v-card-text>
                      </v-card>
                    </v-col>
                    <v-col xs6="xs6" v-for="i in 2">
                      <v-card class="secondary">
                        <v-card-text>6</v-card-text>
                      </v-card>
                    </v-col>
                    <v-col xs4="xs4" v-for="i in 3">
                      <v-card class="primary">
                        <v-card-text>4</v-card-text>
                      </v-card>
                    </v-col>
                    <v-col xs3="xs3" v-for="i in 4">
                      <v-card class="secondary">
                        <v-card-text>3</v-card-text>
                      </v-card>
                    </v-col>
                    <v-col xs2="xs2" v-for="i in 6">
                      <v-card class="primary">
                        <v-card-text>2</v-card-text>
                      </v-card>
                    </v-col>
                    <v-col xs1="xs1" v-for="i in 12">
                      <v-card class="secondary">
                        <v-card-text>1</v-card-text>
                      </v-card>
                    </v-col>
                </v-row>
              </v-container>`,
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
        selectOptions: { initialText: 'SELECT', initialValue: "", isDisable: false, uppercase: true },
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
        categories: [{ name: 'ALUNDRA' }, { name: 'WILD ARMS' }, { name: 'CHRONO CROSS' }],
        selectedItems: []
      }
    };
  },
  components: {celsoDog: celsoDog},
});