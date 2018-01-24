import Config from '../../../config.js';

const state = {
	menuList:Config.menuList
};

const getters = {
    menuList: state => state.menuList
}


export default {
    namespaced: true,
    state,
    getters
}