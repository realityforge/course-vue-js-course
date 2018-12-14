import Vue from 'vue';
// Almost all Vue applications have a main view called Vue
import App from './App.vue';

Vue.config.productionTip = false;

const vue = new Vue({
  render: h => h(App)
});

// This is actually required to bind it to html template
vue.$mount('#app');
