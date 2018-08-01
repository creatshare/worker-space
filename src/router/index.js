import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const route = new Router({
    routes: [{
        path: '/',
        redirect: '/workingdesk'
    }, {
        path: '/workingdesk',
        name: 'WorkingDesk',
        // 工作平台
        component: () =>
            import ('@/views/working-desk/working-desk')
    }]
})

export default route
