import Vue from 'vue'
import ElementUI from 'element-ui'

// 引入 Vue 本地相关配置和入口
import App from './App.vue'
// import store from './store/index.js'
import router from './router'

// 引入 CSS 样式相关文件
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/scss/font-awesome.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

Promise.all([
    // store.dispatch('user/getAllBtn'),
    // store.dispatch('user/getName'),
    // store.dispatch('user/getAll'),
])
.then(() => {
    new Vue({
        router,
        // store,
        render: h => h(App)
    }).$mount('#app')
})
.catch(() => alert(`连接服务器失败, 请联系管理员`))


