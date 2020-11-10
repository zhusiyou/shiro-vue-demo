<template>
  <a-form layout="inline" :model="formInline" @submit="handleSubmit" >
    <a-form-item>
      <a-input v-model:value="formInline.userName" placeholder="Username">
        <template v-slot:prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formInline.password" type="password" placeholder="Password">
        <template v-slot:prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formInline.userName === '' || formInline.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
// import { saveUserInfo } from '@/utils/localStorage.js'
import types from '@/store/types.js'
export default {
  components: {
    UserOutlined,
    LockOutlined,
  },
  data() {
    return {
      formInline: {
        userName: 'zhudawei',
        password: '123456',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch(types.LOGIN, this.formInline)
            .then(data=>{
                console.log(data)
                this.$router.push({name: 'Account'})
            })
    },
  },
};
</script>