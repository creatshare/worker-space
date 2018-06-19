import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const route = new Router({
    routes: [{
        path: '/',
        name: 'Homepage',
        component: () =>
            import ('@/views/homepage/homepage')
    }]
})

export default route
