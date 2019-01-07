import Vue from 'vue'

Vue.filter('percent', (value) => {
  return value ? (value + '%') : '0%'
})
