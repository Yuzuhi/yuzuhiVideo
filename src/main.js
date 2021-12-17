import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';



// import VueDPlayer from "vue-dplayer"
// import "vue-dplayer/dist/vue-dplayer.css"

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(ElementUi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


