<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <template
            v-for="item in routes"
            :key="item.name"
            >
              <a-sub-menu>
                <template #title>
                  <span><component :is="'UserOutlined'" />{{ item.meta.title }}</span>
                </template>
                <a-menu-item
                  v-for="m in item.children"
                  :key="m.name"
                  @click="link(m.name)"
                >
                  {{ m.meta.title }}
                </a-menu-item>
              </a-sub-menu>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
// import * as Icons from '@ant-design/icons-vue';
// import { UserOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router'

function test(){
  const component = {};
  for(let item of ['UserOutlined','LaptopOutlined']){
    let res = ()=>import('@ant-design/icons-vue/'+item+'.js')
    res().then(data=>{
      component[item] = data.default
    })
  }
  return component
}
const components = test()
console.log(components)
export default {
  //延迟？
  //解构
  components,
  setup(){
      const router = useRouter()
      function link(routeName){
          router.push({name: routeName})
      }

      return {
          link,
      }
  },
  data() {
    return {
      selectedKeys: ['Account'],
      openKeys: ['ShortMessage'],
      routes: this.$store.getters.routes,
      // zjName: null,
    };
  },
  mounted(){
    // this.getCom()
  },
  methods:{
    // async getCom() {
    //         let obj = {}
    //         for(let item of ['UserOutlined','LaptopOutlined']){
    //           console.log(item)
    //           let res = await import(`@ant-design/icons-vue/${item}`)
    //           console.log(res.default)
    //           this.zjName = res.default
    //         }
    //         return {
    //           ...obj
    //         }
    //     }
  }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>