import { createStore } from 'vuex'

export default createStore({
  state: {
    innerPageData: {},
    lastRequestData: {},
  },
  mutations: {
		setCurrentBook(state, data){
			return state.innerPageData = data
		},
    setLastRequest(state, response){
			return state.lastRequestData = response
		},
  },
  actions: {
  },
  modules: {
  }
})
