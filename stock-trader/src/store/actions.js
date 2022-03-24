import Vue from 'vue'

export const fetchData = ({ commit }) => {
  Vue.http
    .get('data.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      if (json) {
        const { stocks, funds, stockPortfolio } = json

        const portfolio = {
          funds,
          stockPortfolio,
        }

        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}