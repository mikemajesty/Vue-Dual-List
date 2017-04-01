<script>
  import VueStroll from '../vue-dual-list.vue';
	
  export default {
    data() {
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
  }
</script>