import Vue from 'vue'
import App from './App.vue'
// Use components Globally
import ButtonCounter from './components/ButtonCounter.vue'
import PlayGround from './components/PlayGround.vue'

// Register components Globally
// Vue.component('component-name', Component)
Vue.component('buttonCounter', ButtonCounter)
Vue.component('playGround', PlayGround)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
