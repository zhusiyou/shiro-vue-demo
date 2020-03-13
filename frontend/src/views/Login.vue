<template>
  <div>
    <!-- <form> -->
    <input v-model="userinfo.username" type="text" placeholder="账号">
    <br>
    <input v-model="userinfo.password" type="password" placeholder="密码">
    <br>
    <button type="button" @click="login">login</button>
    <!-- </form> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      userinfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.userinfo)
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>
