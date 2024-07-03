import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';
import router from '@/router/index.js';
import { userLoginReq } from '@/service/userServ.js'
import { userRegisterReq } from '../service/userServ.js';



const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

const store = createStore({
  state() {
    return {
      loggedIn: false,
      username: "",
      jwtToken: "",
      routerName: "",
      list: [],
      type:"",
    }
  },
  mutations: {
    navi(state, data) {
      state.list = data
    },
    setRouterName(state, val) {
      state.routerName = val
    },
    login(state, { username, jwtToken }) {
        state.loggedIn = true,
        state.username = username,
        state.jwtToken = jwtToken
    },
    logout(state) {
      state.loggedIn = false,
        state.username = "",
        state.jwtToken = "",
        state.list = []
    },
    signup(state){
      state.loggedIn = false,
       state.jwtToken = ""
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      return userLoginReq(username, password)
        .then((jwtToken) => {
          commit('login', { username, jwtToken })
            router.push('/Chat')
        })
    },
    register({ commit }, { username, password }) {
      // console.log(username)
      return userRegisterReq(username, password)
        .then((jwtToken) => {
          commit('login', { username, jwtToken })


          router.push('/Login')

        })
    }
  },
  plugins: [vuexLocalStorage.plugin]
});

export { store }