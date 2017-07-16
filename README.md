# Vue Dual List - Dual List using Vuejs and VueMaterial
[![vue-dual-list.gif](https://s27.postimg.org/thne66zyb/vue-dual-list.gif)](https://postimg.org/image/4bmfzcynz/)

## Try it yourself.
[click here](https://vue-dual-list.herokuapp.com/)

# How to install
```JavaScript
 npm install vue-dual-list --save
```

# How to use

```JavaScript
var VueDualList = require('vue-dual-list');

new Vue({
  el: '#vueduallist',
  name: 'vue-dual-list',
  data: function() {
    return {
      options: {
        label: 'Demo title',
        inputOptions: { uppercase: true, isRequired: false },
        buttonOption: { textLeft: 'Move All', textRight: 'Move All' },
        resizeBox: "md",
        items: [
          { 'id': '1', 'name': 'Alundra' },
          { 'id': '2', 'name': 'Jess' },
          { 'id': '3', 'name': 'Meia' },
          { 'id': '4', 'name': 'Melzas' },
          { 'id': '5', 'name': 'Septimus' },

          { 'id': '6', 'name': 'Rudy Roughknight' },
          { 'id': '7', 'name': 'Jack Van Burace' },
          { 'id': '8', 'name': 'Hanpan' },
          { 'id': '9', 'name': 'Cecilia Adlehyde' },

          { 'id': '10', 'name': 'Serge' },
          { 'id': '11', 'name': 'Kid' },
          { 'id': '12', 'name': 'Lynx' },
          { 'id': '13', 'name': 'Harle' },

        ],
        colorItems: '#1E90FF',
        selectedItems: []
      }
    };
  },
  components: {
    'VueDualList': VueDualList
  }
});
```

##### In your page use

```Html
  <vue-dual-list id="vueduallist" :options="options"></vue-dual-list>
```
##### Dual list options

* **options: {label}:**(optional): Label that will be displayed in the directive input text.;
* **options.inputOptions: {uppercase}**(required): Indicates if the letters in input text it will be uppercase.;
* **options.inputOptions: {isRequired}**(required): Indicates if the letters in input text it will be required.;
* **options.buttonOption: {textLeft}**(optional): Left button text.;
* **options.buttonOption: {textRight}**(optional): Right button text.;
* **options.resizeBox:**(optional): Height of the items box. [{'xs': 150px},{'md': 225px},{'lg': 350px},{'xl': 500px}];
* **options.items:**(required): Items that will be on the list.;
* **options.colorItems:**(optional): Color of the items that will be on the list.;
* **options.selectedItems:**(optional): Items selected by the user.;

#### change dual list
To execute your changes run the command ```npm run compile```

#### Used versions

##### vue 
version: `2.2.6`
##### vue-material
version: `^0.7.1` 

<hr>

### License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)