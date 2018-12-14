import Vue from 'vue';
// Almost all Vue applications have a main view called Vue
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
