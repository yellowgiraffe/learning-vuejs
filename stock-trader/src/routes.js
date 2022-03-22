import Home from './components/Home.vue'
import StocksList from './components/stocks/StocksList.vue'
import UserPortfolio from './components/portfolio/UserPortfolio.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/stocks', component: StocksList },
  { path: '/portfolio', component: UserPortfolio }
]