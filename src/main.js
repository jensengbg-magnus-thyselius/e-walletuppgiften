import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import AddCard from './components/AddCard'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/addcard', component: AddCard },
  ],
  mode: 'history'
})

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
