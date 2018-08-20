import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = new Router({
    routes: [{
        path: '/',
        redirect: '/workingdesk'
    }, {
        path: '/login',
        name: '',
        // 工作平台
        component: () =>
            import ('@/views/login/login')
    }, {
        path: '/workingdesk',
        name: 'WorkingDesk',
        // 工作平台
        component: () =>
            import ('@/views/working-desk/working-desk')
    }]
})

// routes.beforeEach((to, from, next) => {
//     const list = store.getters['user/buttonRole']
//     // console.log(to)
//     // if (!list.some(i => i.source === to.path) && to.path !== '/403') {
//     //     // console.log('next')
//     //     next('/403')
//     // } else if (to.path === '/403') {
//     //     next()
//     // } else {
//     next()
//     // }
// })

export default routes
