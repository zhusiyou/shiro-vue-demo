<template>
  <!--xiaobin begin-->
  <div class="wholePaper sale11">
    <div style="padding:228px 0 0 0;width:600px;margin:0 auto;">
      <ul class="textListWrap" style="height:215px;overflow:hidden;">
        <li v-for="(item, index) in pageTextInfo.offerStrategy.contents" :key="item">
          <i />
          <input
            v-model="pageTextInfo.offerStrategy.contents[index]"
            type="text"
            placeholder="请输入内容，最多35个字符，非必填"
            maxlength="35"
            class="underLineInp fontSmallBlack"
            @input="changed('offerStrategy')"
          >
        </li>
      </ul>
      <ul class="textListWrap" style="height:244px;overflow:hidden;">
        <li v-for="(item, index) in pageTextInfo.lookStrategy.contents" :key="item">
          <i />
          <input
            v-model="pageTextInfo.lookStrategy.contents[index]"
            type="text"
            placeholder="请输入内容，最多35个字符，非必填"
            maxlength="35"
            class="underLineInp fontSmallBlack"
            @input="changed('lookStrategy')"
          >
        </li>
      </ul>
      <ul class="textListWrap" style="height:204px;overflow:hidden;">
        <li v-for="(item, index) in pageTextInfo.houseInfo.contents" :key="item">
          <i />
          <input
            v-model="pageTextInfo.houseInfo.contents[index]"
            type="text"
            placeholder="请输入内容，最多35个字符，非必填"
            maxlength="35"
            class="underLineInp fontSmallBlack"
            @input="changed('houseInfo')"
          >
        </li>
      </ul>
      <ul class="textListWrap" style="height:120px;overflow:hidden;">
        <li v-for="(item, index) in pageTextInfo.otherStrategy.contents" :key="item">
          <i />
          <input
            v-model="pageTextInfo.otherStrategy.contents[index]"
            type="text"
            placeholder="请输入内容，最多35个字符，非必填"
            maxlength="35"
            class="underLineInp fontSmallBlack"
            @input="changed('otherStrategy')"
          >
        </li>
      </ul>
    </div>
    <!-- <button @click="save">save</button> -->
  </div>
  <!--xiaobin end-->
</template>
<script>
import mt from '@/assets/mt.js'
export default {
  components: {
    // editable: mt.vueLoader("/static/vue-components/editable.vue")
  },
  // props: ["docId"],
  data() {
    return {
      docId: '7ed7e17837fc4196a7e01bad7f21ef19',
      changedData: [],
      pageTextInfo: {
        offerStrategy: { contents: [] },
        lookStrategy: { contents: [] },
        houseInfo: { contents: [] },
        otherStrategy: { contents: [] }
      }
    }
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var url = 'http://localhost:8080/cm/api/salesProposalReportAction.do?method=getSaleStrategyData&docId=' +
          this.docId
      var that = this
      this.axios.get(url).then(function(rsp) {
        that.pageTextInfo = rsp.data
      })
    },
    changed(key) {
      this.pageTextInfo[key].content = this.pageTextInfo[key].contents.join(
        mt.config.textSeparator
      )
      this.changedData.push(key)
      this.$emit('updated')
    },
    save() {
      var url = 'http://localhost:8080/cm/api/salesProposalReportAction.do?method=saveSaleStrategyData'

      var vo = {
        changedData: mt.distinctArr(this.changedData),
        pageTextInfo: this.pageTextInfo,
        docId: this.docId
      }
      // console.log(vo);
      this.axios.post(url, vo)
        .then(function(rsp) {
          // eslint-disable-next-line no-undef
          Console.log(rsp.data)
        })
    },
    saved() {
      this.changedData.splice(0)
    }
  }
}
</script>
