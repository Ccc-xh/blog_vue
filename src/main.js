import Vue from 'vue'
// import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AmazeVue from 'amaze-vue'
import 'amaze-vue/dist/amaze-vue.css'
import App from '../src/components/App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import '../service/hljs'
import hljs from 'highlight.js'
import 'highlight.js/styles/ocean.css'
// axios.defaults.baseUrl='/api'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(ElementUI)
Vue.use(AmazeVue);
Vue.config.productionTip = false
Vue.prototype.$axios= axios
new Vue({
  router,
  store,
  render: i =>i(App),
  mounted() {
  },
}).$mount('#index')

//代码高亮
hljs.highlightCode = function () { 
	//自定义highlightCode方法，将只执行一次的逻辑去掉
	let blocks = document.querySelectorAll('pre code');
	[].forEach.call(blocks, hljs.highlightBlock);
};



