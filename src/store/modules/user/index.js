import axios from '@/util/ajax';
import Cookies from 'js-cookie';

const state = {
    // uid
    userid: '',
    // 用户名
    username: '',
    // key
    userkey: ''
}

const getters = {
    username: state => state.username,
    userid: state => state.userid,
    userkey: state => state.userkey
}

const mutations = {
    setUsername: (state, data) => {
        if(data){
            Cookies.set('uid', data)
        } else {
            Cookies.remove('uid')
        }
        state.userid = data
    },
    setUserid: (state, data) => {
        if(data){
            Cookies.set('name', encodeURIComponent(data))
        } else {
            Cookies.remove('name')
        }
        state.username = data
    },
    setUserkey: (state, data) => {
        if(data){
            Cookies.set('user-key', data)
        } else {
            Cookies.remove('user-key')
        }
        state.userkey = data
    }
}

const actions = {
    login({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get('/login/info/').then(({data}) => {
                if(data.nick && data.userId){
                    resolve(1);
                    commit('setUsername', data.nick);
                    commit('setUserid', data.nick);
                    commit('setUserkey', Cookies.get('user-key'));
                }else{
                    resolve(0);
                }
            }).catch(() => {
                reject(0);
            })
        });
    },
    // 登出
    logout({commit}) {
        return new Promise((resolve) => {
            commit('setUsername', '')
            commit('setUserid', '')
            commit('setUserkey', '')
            resolve();
        })
    },
    // 重新登录
    // relogin({commit}){
    //     return new Promise((resolve) => {
    //         // TODO setUserid
    //         commit('setUserid', Cookies.get('uid'))
    //         commit('setUsername', decodeURIComponent(Cookies.get('name')))
    //         commit('setUserkey', Cookies.get('user-key'))
    //         resolve();
    //     })
    // }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}