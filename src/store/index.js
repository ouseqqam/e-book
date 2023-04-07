import { createStore } from 'vuex'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut } from 'firebase/auth'
import { auth } from '@/firebase/config'


export const store = createStore({
  state: {
    user: null,
    isAuth: false
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },

    setIsAuth(state, payload) {
      state.isAuth = payload
    }
  },
  actions: {
    async signup(context, user) {
      const res = await createUserWithEmailAndPassword(auth, user.email, user.password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Error')
      }
    },
    async signin(context, user) {
      const res = await signInWithEmailAndPassword(auth, user.email, user.password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('Error')
      }
    },
    async logout(context) {
      await signOut(auth)
      context.commit('setUser', null)
    }
  },
  modules: {  
  }
})

export default store

const unsub = onAuthStateChanged(auth, user => {
  store.commit('setIsAuth', true)
  store.commit('setUser', user)
  unsub()
})
