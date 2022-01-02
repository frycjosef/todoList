import axios from 'axios';
import '../axios';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: ''
};

const getters = {
    isLoggedIn: function (state) {
        if (state.token != '') {
            return true;
        }
        return false;
    },
    authState: state => state.status,
    user: function (state) {
        return state.user
    }
};

const actions = {
    async login({
        commit
    }, user) {
        commit('auth_request');
        let res = await axios.post('users/login', user);
        if (res.data.success) {
            const token = res.data.token;

            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user);
        }
    },
    async logout({ commit }) {
        localStorage.setItem('token', '');
        commit('auth_logout');
    }
};

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.user = user
        state.token = token
        state.status = 'success'
    },
    auth_logout(state) {
        state.token = ''
        state.user = {}
        state.status = ''
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}