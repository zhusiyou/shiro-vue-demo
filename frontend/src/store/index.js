import { createStore } from 'vuex'
import types from '@/store/types.js'
import router from '@/router'
import service from '@/api/request.js'
import { getUserInfo, saveUserInfo } from '@/utils/localStorage.js'

const state = {
    inited: false,
    isLogin: false,
    routes: [],
    roles: [],
    permissions: []
}

const getters = {
    routes: state => {
        return state.routes
    },
    isLogin: state => {
        // commit()
        return state.isLogin
    },
    isInited: state => {
        return state.inited
    }
}

const convertToRoutes = function(menus){
    if(!menus)return []
    const routes = []
    menus.forEach(element => {
        const route = {
            name: element.name,
            path: element.path,
            meta: element.meta,
            component: ()=>import (`@/views${element.component}`),
            children: convertToRoutes(element.children)
        }
        routes.push(route)
    })
    return routes;
}

const mutations = {
    [types.RELOAD](state){
        state.inited = true
        const userInfo = getUserInfo()
        if(userInfo){
            this.commit(types.LOGIN, userInfo)             
        }
    },
    [types.LOGIN](state, loginResult){        
        state.isLogin = loginResult.msg.indexOf('success')>=0
        if(!state.isLogin)return;

        //route
        const tmpRoutes = convertToRoutes(loginResult.menus)
        state.routes = tmpRoutes
        tmpRoutes.forEach(el=>router.addRoute(el))

        state.permissions = loginResult.permissionNames
        state.roles = loginResult.roleNames
    },
}

const actions = {
    login({commit}, loginObj){   
        return new Promise((resolve, reject)=>{
            service.post('/login', loginObj).then((response)=>{  
                const data = response.data  
                if(data.msg.indexOf('success')==-1){
                    alert(data.msg);
                    return;
                }
                commit(types.LOGIN, data)
                saveUserInfo(data)
                resolve(data)
            }).catch((err)=>{
                console.log(err)
                reject(err)
            })
        })
    }
}

const store = createStore({
    state,
    getters,
    mutations,
    actions
})

export default store