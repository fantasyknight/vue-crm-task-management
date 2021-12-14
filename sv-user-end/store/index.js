export const state = () => ({
    userToken: ""
  })
export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    }
  }
  export const mutations = {
    setToken(state, value) {
      state.userToken = value
    },
    unsetToken(state) {
      state.userToken = ""
    }
  }