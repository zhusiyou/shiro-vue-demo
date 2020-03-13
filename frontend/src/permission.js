import Vue from 'vue'
import store from './store'
import router from './router'

router.beforeEach(async(to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.roles.length === 0) {
      next('/login')
      return
    }
    if (store.state.allRoutes.length === 2) {
      const routes = await store.dispatch('generateRoutes', store.state.roles)
      // console.log('==========asyncRoutes==========')
      // console.log(routes)
      // console.log(store.state.allRoutes)
      router.addRoutes(routes)
    }
  }
  next()
})

Vue.directive('permission', {
  inserted(el, binding) {
    const { value } = binding

    if (value && value instanceof Array && value.length > 0) {
      const hasPermission = store.state.permissions.some(p => {
        return value.includes(p)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(`need permissions!`)
    }
  }
})
