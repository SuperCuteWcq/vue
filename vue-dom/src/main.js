// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './util/flexble'
import store from './store/index'
import '../static/scss/common.scss'
import '../static/font/iconfont.css'
import elui from "element-ui"
import {DatePicker} from "element-ui"
import '../static/font_ah5f6mc8449/iconfont.css'
import alertMessage from './views/components/alertMessage'
Vue.config.productionTip = false
Vue.use(elui)
Vue.use(DatePicker)
const AlertClass=Vue.extend(alertMessage)//组件类
const AlertComponet=new AlertClass()
Vue.prototype.$alert=(text)=>{
  propsData:{
    text
  }
}
AlertComponet.$mount()
document.body.appendChild(AlertComponet.$el)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
