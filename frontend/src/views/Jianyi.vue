<template>
  <div>
    <button v-permission="['add']">must has 'add' permission</button>
    <br>
    <button v-permission="['query']">must has 'query' permission</button>
    <hr>
    <template v-for="item in pageTextInfo.offerStrategy.contents">
      <Editable :key="item" :text="item" />
    </template>
  </div>
</template>
<script>
// import Strategy from '@/components/Strategy'
import Editable from '@/components/Editable'
export default {
  components: {
    // Strategy,
    Editable
  },
  data() {
    return {
      pageTextInfo: {
        offerStrategy: { contents: [] },
        lookStrategy: { contents: [] },
        houseInfo: { contents: [] },
        otherStrategy: { contents: [] }
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // var url = 'http://localhost:8080/cm/api/salesProposalReportAction.do?method=getSaleStrategyData&docId=7ed7e17837fc4196a7e01bad7f21ef19'
      // var that = this
      // this.axios.get(url).then(function(rsp) {
      //   that.pageTextInfo = rsp.data
      // })

      this.pageTextInfo.offerStrategy.contents = ['first', 'second', 'third']
    }
  }
}
</script>
