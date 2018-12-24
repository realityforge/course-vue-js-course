import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

// Enable router plugin
Vue.use(VueRouter);

const router = new VueRouter({
  // This history is browser based history rather than hash based
  // this is needed to enable oauth integration
  mode: 'history',
  routes: [
  ]
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
