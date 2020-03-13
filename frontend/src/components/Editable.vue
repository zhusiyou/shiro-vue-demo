<template>
  <div>
    <input v-model="text" type="text">
  </div>
</template>
<script>
module.exports = {
  props: {
    text: { type: String, required: true }
  },
  data() {
    return {
    }
  },
  watch: {
    // items: {
    //   immediate: true,
    //   handler (val) {
    //     this.pageItems = val;
    //   }
    // }
  }
}
</script>
