import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from '../src/router'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// 引入toast文件
import toast from 'components/common/toast'
// 安装Toast插件
Vue.use(toast)
// 安装使用图片懒加载VueLazyLoad
Vue.use(VueLazyLoad,{
  loading:require('assets/img/common/placeholder.png')  //图片占位图
})

// 解决移动端300ms延迟
FastClick.attach(document.body)
Vue.prototype.$bus=new Vue({})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
