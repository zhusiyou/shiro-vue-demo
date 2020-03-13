import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { dynamicRoutes, staticRoutes } from '../router'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    roles: [],
    permissions: [],
    allRoutes: staticRoutes
  },
  mutations: {
    initRoles(state, roles) {
      state.roles = roles
    },
    initPermissions(state, permissions) {
      state.permissions = permissions
    },
    initAllRoutes(state, routes) {
      state.allRoutes = state.allRoutes.concat(routes)
    }
  },
  actions: {
    login({ commit }, userinfo) {
      return new Promise((resolve, reject) => {
        // axios.get('http://localhost:8080/login?userName=wsl&password=123456')
        axios.get(`http://localhost:8080/login?userName=${userinfo.username}&password=${userinfo.password}`)
          .then(rsp => {
            // eslint-disable-next-line no-console
            console.log(rsp.data)
            commit('initRoles', rsp.data.roleNames)
            commit('initPermissions', rsp.data.permissionNames)
            resolve(rsp.data)
          })
          .catch(err => reject(err))
      })
    },
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRoutes
        if (roles.includes('admin')) {
          accessedRoutes = dynamicRoutes || []
        } else {
          accessedRoutes = [dynamicRoutes[1]]
        }
        commit('initAllRoutes', accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
})

export default store
