import * as types from '../types'
import * as user from '../api/user'
import {getUsername, setUsername} from '@/commons/util'
import store from '../index'

const findRealName = (shotName) => {
    try {
        return store.getters['user/list'].find(u => u.username === shotName).fullname
    } catch (e) {
        // console.error(e)
        return shotName
    }
}

const state = {
    list: [],
    username: '',
    routerRole: [],
    buttonRole: [],
}

const getters = {
    list: (state) => state.list,
    realName: (state) => {
        const findName = findRealName(state.username)
        window.__fb_name_zh__ = findName || state.username
        return findRealName(state.username)
    },
    buttonRole: (state) => state.buttonRole
}

const actions = {
    async getAllBtn({commit}) {
        try {
            const {data} = await user.getAllBtn()
            commit('setButtonRole', data)
        } catch (e) {
            console.log(store.dispatch('snack/open', {text: '请登录'}))
        }
    },

    async getAll({commit}) {
        const list = await user.all()
        commit(types.SET_ALL, list)
    },
    /**
     *
     * @param commit
     * @param state
     * @param flag
     * @returns {Promise.<void>}
     */
    async getName({commit, state}, flag = false) {
        if (state.name && !flag) return
        try {
            let
                encodeName = getUsername(),
                // 获取真实拼音名
                result = await user.getUnEncryptUsername(encodeName),
                name = result.aData
            commit(types.SET_ONE, name)
        } catch (e) {
            store.dispatch('snack/open', {text: '请登录', type: 'error'})
        }
    },

    async setUsername({commit}, username) {
        let r = await user.getEncryptUsername(username)
        console.log(r)
        setUsername(r.aData)
        window.location.reload()
    },

    setName({commit}, name) {
        commit(types.SET_ONE, name)
    },

}

const mutations = {
    [types.SET_ALL]: (state, list) => state.list = list,

    [types.SET_ONE]: (state, name) => {
        window.__fb_name__ = name
        state.username = name
    },

    'setButtonRole': (state, list) => state.buttonRole = list
}

const namespaced = true

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced,
}