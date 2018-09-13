import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1,
  enid: '',
};
const mutations = {
  add(state) {
    state.count++;
  },
  reduce(state) {
    state.count--;
  },
  changeid(state, eid) {
    state.enid = eid
  }
};
const actions = {
  changeaid(ctx, eid) {
    ctx.commit('changeid', eid)
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions
})
