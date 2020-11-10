import store from '@/store'

const directives = new Map()
directives.set('permission', (el, binding)=>{
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
})

export default directives