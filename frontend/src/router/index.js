import { createRouter, createWebHashHistory} from 'vue-router'
// import { getUserInfo } from '@/utils/localStorage.js'
import store from '@/store'
import types from '@/store/types.js'

const routes = [
    {
        path: '/sms',
        name: 'ShortMessage',
        component: ()=> import('@/views/Layout.vue'),
        meta:{
            roles: ['admin', 'guest']
        },
        children: [
            {
                path: 'account',
                name: 'Account',
                component: ()=> import('@/views/sms/Account.vue')
            },
            {
                path: 'sign',
                name: 'Sign',
                component: ()=> import('@/views/sms/Sign.vue')
            }
        ]
    },    
    {
        path: '/login',
        name: 'Login',
        component: ()=>import('@/views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


function isLogin(){
    return store.getters.isLogin
}

const loginSymbol = "Login"

router.beforeEach((to, from, next)=>{ 
    if(to.name != loginSymbol){

        if(!store.getters.isInited){
            store.commit(types.RELOAD)

            //TODO: 这里用next()为什么不行

            // hack method to ensure that addRoutes is complete
            // set the replace: true, so the navigation will not leave a history record
            return next({...to, replace: true})
        }

        if(!isLogin()){
            next({name: loginSymbol})
        }else{ 
            next()
        }
    }else{
        // login page
        next()
    }
})

export default router