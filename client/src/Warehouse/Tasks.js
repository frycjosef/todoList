import axios from 'axios';
import '../axios';

const state = {
    tasks: [],
    loadingTasks: false
};

const getters = {
    tasks: state => state.tasks
};

const actions = {
    async loadTasks({ commit }) {
        commit('setLoading', true);
        let tasks = await axios.get('tasks');
        commit('saveTasks', tasks);
        commit('setLoading', false);
    },
    async loadTask({ commit }, id) {
        commit('setLoading', true);
        let tasks = await axios.get('tasks/' + id);
        commit('saveTasks', tasks);
        commit('setLoading', false);
    }
};

const mutations = {
    saveTasks(state, tasks) {
        state.tasks = tasks
    },
    setLoading(state, value) {
        state.loadingTasks = value
    }
};

export default {
    state,
    mutations,
    getters,
    actions
}