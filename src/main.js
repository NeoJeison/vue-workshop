import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Users from './components/Users.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/users', component: Users}
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
