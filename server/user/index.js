const e = require('express')
const user = e.Router()
const mock = require('mockjs').mock

// 查询菜单
user.get('/menu', (req, res, next) => {
    // res.send(JSON.stringify())
    req.data = [
        // 模块
        {id: 1, name: '机房动环', pId: 0, orderBy: 1,icon:'event'},
        {id: 2, name: '服务器硬件', pId: 0, orderBy: 1,icon:'dvr'},
        {id: 3, name: '系统与服务', pId: 0, orderBy: 1,icon: 'laptop_mac'},
        {id: 4, name: '网络基础设施', pId: 0, orderBy: 1,icon: 'rss_feed'},
        // 动环
        {id: 5, name: '机房监控图', pId: 1, orderBy: 1},
        {id: 6, name: '机房监控表', pId: 1, orderBy: 2},
        {id: 7, name: '趋势展示', pId: 1, orderBy: 3},
        {id: 8, name: '报警策略', pId: 1, orderBy: 4},
        {id: 9, name: '报警屏蔽', pId: 1, orderBy: 5},
        {id: 10, name: '报警历史', pId: 1, orderBy: 6},
        {id: 11, name: '用户和组', pId: 1, orderBy: 7},
        // 服务器硬件
        {id: 12, name: '趋势展示', pId: 2, orderBy: 1},
        {id: 13, name: '报警策略', pId: 2, orderBy: 2},
        {id: 14, name: '报警屏蔽', pId: 2, orderBy: 3},
        {id: 15, name: '报警历史', pId: 2, orderBy: 4},
        {id: 16, name: '用户和组', pId: 2, orderBy: 5},
    ]
    next()
})

// 新增角色
user.post('/role', (req, res, next) => {
    user.roleLength++
    req.data = mock({
        'id': user.roleLength,
        'name': () => mock('@first'),
        'fullName': () => mock('@ctitle(3, 6)')
    })
    req.msg = '添加成功!'
    next()
})

//取消某个角色的管理员权限
user.delete('/role/:roleid/admin/user/:userid',(req, res, next) => {
    req.msg = '取消授权成功!'
    next(console.log(req.msg))
})

//授权某个角色下的用户成为管理员
user.post('/role/:roleid/admin/user/:userid',(req, res, next) => {
    req.data = mock({
        'data':
            {
                'roleId': req.params.roleid,
                'roleName': () => mock('@ctitle(3, 6)'),
                "userId": req.params.userid,
                "userName": () => mock('@first'),
                "adminNot|1-2e": false
            }

    }).data
    req.msg = '授权成功!'
    next(console.log(req.msg))
})

//批量修改用户
user.put('/role/:roleid/user/:userid',(req, res, next) => {
    req.msg = '修改成功!'
    next(console.log(req.msg))
})

//修改角色
user.put('/role/:roleid', (req, res, next) => {
    req.data = mock({
        'id': req.params.roleid,
        'name': () => mock('@first'),
        'roleName': () => mock('@ctitle(3, 6)')
    })
    req.msg = '修改成功!'
    next()
})

module.exports = user
