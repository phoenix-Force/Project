import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./route.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { locale })
Vue.use(VueRouter);



const router = new VueRouter({
  mode:"history",
  routes

});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
