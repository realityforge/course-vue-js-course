import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import AuthHandler from './components/AuthHandler.vue';
import ImageList from './components/ImageList.vue';
import ImageUpload from './components/ImageUpload.vue';
import store from './store';

Vue.config.productionTip = false;

// Enable router plugin
Vue.use(VueRouter);

export const router = new VueRouter({
  // This history is browser based history rather than hash based
  // this is needed to enable oauth integration
  mode: 'history',
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: ImageUpload },
    { path: '/oauth2/callback', component: AuthHandler }
  ]
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
