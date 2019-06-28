import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'
import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6IkdhYnJpZWwgSyBGIFNhc3Nha2kiLCJlbWFpbCI6InNhc2FraUBzYXNzYWtpLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NjE2NDQ4MzQsImV4cCI6MTU2MTkwNDAzNH0.tXeUUgWZYbzS7T1wVrifTItPYmljFw8Rv5OIZfqqCNw'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')