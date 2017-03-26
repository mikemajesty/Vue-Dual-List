Vue.component('celso-dog', {
  template: `<div class='excaliburduallist'> 
                <div class='row'>
                  <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                      <h4>
                        {{options.label}}
                      </h4>
                      <select class='form-control' v-model='search'>
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
                        <li v-for='item in options.items'>
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
    },
    'search': {
      type: String,
      required: false
    }
  },
  methods: {
    find: function(items) {
      console.log('items', items);
    },
    transfer: function(current, to, index) {
      if (index >= 0) {
        to.push(current[index]);
        current.splice(index, 1);
      } else {
        for (var i = 0; i < current.length; i++) {
          to.push(current[i]);
        }
        current.length = 0;
      }

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
          { 'category': 'FF8', 'name': 'Squall Leonhart' },
          { 'category': 'FF8', 'name': 'Quistis Trepe' },
          { 'category': 'FF8', 'name': 'Zell Dincht' },

          { 'category': 'FF9', 'name': 'Zidane' },
          { 'category': 'FF9', 'name': 'Garnet' },
          { 'category': 'FF9', 'name': 'Vivi' },

          { 'category': 'FF7', 'name': 'Cloud Strife' },
          { 'category': 'FF7', 'name': 'Aerith Gainsborough' },
          { 'category': 'FF7', 'name': 'Vincent Valentine' },

        ],
        categories: [{ name: 'FF7' }, { name: 'FF8' }, { name: 'FF9' }],
        selectedItems: []
      }
    };
  }
});