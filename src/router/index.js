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
    }, {
        path: '/meetingrecord',
        name: 'MeetingRecord',
        // 会议记录
        component: () =>
            import ('@/views/meeting-record/meeting-record')
    }, {
        path: '/forumchatting',
        name: 'ForumChatting',
        // 论坛畅聊
        component: () =>
            import ('@/views/forum-chatting/forum-chatting')
    }, {
        path: '/personalspace',
        name: 'PersonalSpace',
        // 个人空间
        component: () =>
            import ('@/views/personal-space/personal-space')
    }]
})

export default route
