import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

import lista from './components/lista.vue'
import tokyo2020 from './components/tokyo2020.vue'

const routes = [
  { path: '/listanotas', component: lista },
  { path: '/tokyo2020', component: tokyo2020 },
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
