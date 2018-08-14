export const getCardButtons = () => {
    return Promise.resolve({
        code: 2000,
        data: {
            'cardButtons': [
                {
                    id: '1',
                    pid: '1',
                    name: '删除卡片',
                    enName: 'destroy',
                    iconClass: 'fa-trash',
                    bgColorName: 'bg-yellow',
                    interface: '/card/user/destory',
                    disabled: true,
                    msg: '暂未开通功能'
                }, {
                    id: '2',
                    pid: '1',
                    name: '移动分组',
                    enName: 'move',
                    iconClass: 'fa-exchange',
                    bgColorName: 'bg-blue',
                    interface: '/card/user/move',
                    disabled: true,
                    msg: '暂未开通此功能'
                }, {
                    id: '3',
                    pid: '1',
                    name: '设置卡片',
                    enName: 'setting',
                    iconClass: 'fa-cog',
                    bgColorName: 'bg-orange',
                    interface: '/card/admin/setting',
                    disabled: false,
                    msg: ''
                }, {
                    id: '4',
                    pid: '1',
                    name: '新增成员',
                    enName: 'addUser',
                    iconClass: 'fa-trash',
                    bgColorName: 'bg-yellow',
                    interface: '/card/admin/addUser',
                    disabled: false,
                    msg: ''
                }, {
                    id: '5',
                    pid: '1',
                    name: '修改成员',
                    enName: 'add',
                    iconClass: 'fa-cog',
                    bgColorName: 'bg-orange',
                    interface: '/card/admin/editUser',
                    disabled: false,
                    msg: ''
                }, {
                    id: '6',
                    pid: '1',
                    name: '删除成员',
                    enName: 'add',
                    iconClass: 'fa-exchange',
                    bgColorName: 'bg-blue',
                    interface: '/card/admin/deleteUser',
                    disabled: false,
                    msg: ''
                }
            ]
        }
    })
}

export const getCardContributor = () => {
    return Promise.resolve({
        code: 2000,
        data: [{
            "memberId": 1,
            "userId": 3,
            "name": "韩亦乐",
            "enName": "hylerrix",
            "avatar": "https://avatars0.githubusercontent.com/u/19285461"
        }, {
            "memberId": 1,
            "userId": 3,
            "name": "赵成成",
            "enName": "zhaochengcheng",
            "avatar": "http://www.creatshare.com/img/follow/creatshare.jpg"
        }]
    })
}