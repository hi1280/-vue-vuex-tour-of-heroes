import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import { routes } from './routes';
import store from './store/store';
import './assets/style.css'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://tour-of-heroes-api.herokuapp.com/api/heroes';

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
