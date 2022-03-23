import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RANDOM_STOCKS' (state) {

  },
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit();
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({ commit }) => {
    commit('RANDOM_STOCKS')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}