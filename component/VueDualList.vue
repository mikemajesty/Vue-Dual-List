<template lang="html">
	<md-layout md-gutter class='vue-dual-list'>
		<md-layout md-flex-small="100" md-flex-medium="100" md-hide-xsmall>

			<md-input-container v-if='options.inputOptions.isRequired' style='margin-bottom: 0px'>
				<label for="filter">{{options.label}}</label>
        <md-input v-model="search" required v-bind:style="{'text-transform': options.inputOptions.uppercase ? 'uppercase' : ''}"></md-input>
			</md-input-container>

			<md-input-container v-if='!options.inputOptions.isRequired' style='margin-bottom: 0px'>
				<label for="filter">{{options.label}}</label>
        <md-input v-model="search" v-bind:style="{'text-transform': options.inputOptions.uppercase ? 'uppercase' : ''}"></md-input>
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
					{{ options.buttonOption.textRight }}
				</md-button>
			</md-layout>

			<md-layout md-flex class='list' v-bind:class="options.resizeBox">
				<ul class='pd'>
					<li v-for='item in filtering' :key="item.name">
						<a href='#' v-on:click='transferToRight(options.items.indexOf(item))' v-bind:style="{ color: options.colorItems || '#1E90FF' }">
					    {{ item.name }}&nbsp;&rArr;</a>
					</li>
				</ul>
			</md-layout>

			<div style='padding-left: 10px' />

			<md-layout md-flex class='list' v-bind:class="options.resizeBox">
				<ul class='pd'>
					<li v-for='item in options.selectedItems' :key="item.name">
						<a href='#' v-on:click='transferToLeft(options.selectedItems.indexOf(item))' v-bind:style="{ color: options.colorItems || '#1E90FF'}">
								&lArr;&nbsp;{{ item.name }}
						</a>
					</li>
				</ul>
			</md-layout>
		</md-layout>
	</md-layout>
</template>

<style lang="css">
  .vue-dual-list .list {
    border: 1px solid #999;
    border-radius: 4px;
    padding: 10px;
    overflow-y: scroll;
  }
  
  .vue-dual-list .xs {
    height: 150px;
  }
  
  .vue-dual-list .md {
    height: 225px;
  }
  
  .vue-dual-list .lg {
    height: 350px;
  }
  
  .vue-dual-list .xl {
    height: 500px;
  }
  
  .vue-dual-list ul.pd {
    padding-left: 12px;
  }
</style>

<script>
  import Vue from 'vue'
  import VueMaterial from 'vue-material'

  Vue.use(VueMaterial)

  export default {
    name: 'vue-dual-list',
    props: {
      'options': {
        type: Object,
        default: {},
        required: true
      }
    },
    data: function () {
      return {
        search: '',
        item: {}
      }
    },
    methods: {
      transferToRight: function (index) {
        this.search = ''
        if (index >= 0) {
          this.options.selectedItems.push(this.options.items[index])
          this.options.items.splice(index, 1)
        } else {
          for (var cont = 0; cont < this.options.items.length; cont++) {
            this.options.selectedItems.push(this.options.items[cont])
          }

          this.options.items.splice(0, this.options.items.length)
        }
      },
      transferToLeft: function (index) {
        this.search = ''
        if (index >= 0) {
          this.options.items.push(this.options.selectedItems[index])
          this.options.selectedItems.splice(index, 1)
          return
        }
        for (var cont = 0; cont < this.options.selectedItems.length; cont++) {
          this.options.items.push(this.options.selectedItems[cont])
        }
        this.options.selectedItems.splice(0, this.options.selectedItems.length)
      }
    },
    computed: {
      filtering: function () {
        if (this.search) {
          return this.options.items.filter((item) => {
            return item.name.toLowerCase().indexOf(this.search) !== -1
          })
        }
        return this.options.items
      }
    }
  }
</script>
