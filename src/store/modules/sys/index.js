
const state = {
    // lang: Lang,
    ajaxTimeOut:5000,
    sysName:'京东物流管理系统'
}

const getters = {
    // lang: state => state.lang,
    ajaxTimeOut: state => state.ajaxTimeOut,
    // const
    sysName: state => state.sysName
}

const mutations = {
    // changeLang(state, data){
    //     if(data){
    //         // Cookies.set('lang', data)
    //         // i18n.locale = data
    //         // state.lang = data
    //     }   
    // },
    changeAjaxTimeOutTime(state, data){
        if(data){
            state.ajaxTimeOut = data
        }   
    }
}

const actions = {
    // changeLang(data) {
    //     return new Promise((resolve, reject) => {
    //        commit('changeLang', data)
    //     });
    // },
    changeAjaxTimeOutTime({ commit, data}){
        return new Promise((resolve) => {
           commit('changeAjaxTimeOutTime', data);
           resolve();
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}