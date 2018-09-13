<template>
    <div>
        <h6>这是props弹层传过来的{{this.$store.state.enid}}</h6>
        <slot></slot>
asd  <h1>这是vue router地址栏传递过来的{{eid}}</h1>
    <h2>{{detailName}}</h2>
    <span>{{newbili}}</span>
    </div>
</template>

<script>
import myaxios from "../promise/myaxios.js";
import * as api from "../promise/apiList.js";
export default {
  data() {
    return {
      eid: this.$route.query.entity_id,
      detailRes: "",
      detailName: "",
      bili: ""
    };
  },
  props: {
    enid: {
      type: [String, Number],
      required: false, //true 必传  false 非必传
      default: "112", // 非必填状态下的 默认值
      validator: function(value) {
        //参数value就是传入的需要校验的数值
        return value.length > 3; //传入值大于3
      }
    }
  },
  methods: {
    showData(res) {
      console.log(res);
      this.detailRes = res.data.data.basic_info;
      this.bili = res.data.data.basic_info.score_info.bad_rate;
      this.detailName =
        res.data.data.basic_info.main_info.scan_info.entity_name;
    }
  },
  beforeUpdate() {
    myaxios.reqGet(
      api.DETAIL_API,
      {
        params: {
          entity_id: this.$store.state.enid
        }
      },
      this.showData
    );
  },
  created() {
    console.log("----------enid props is -----------");
    console.log(typeof this.enid);
    myaxios.reqGet(
      api.DETAIL_API,
      {
        params: {
          entity_id: this.$route.query.entity_id
        }
      },
      this.showData
    );
    myaxios.reqGet(
      api.DETAIL_API,
      {
        params: {
          entity_id: this.$store.state.enid
        }
      },
      this.showData
    );
  },
  mounted() {
    console.log("detail props mounted is");
    console.log(this.enid);
  },
  computed: {
    newbili() {
      return Math.floor(Number(this.bili) * 100, 2) + "%";
    }
  }
  // watch: {
  //   enid(newValue, oldValue) {
  //     console.log("watch");
  //     console.log(newValue);
  //     this.enid = newValue;
  //     console.log("----------enid props is (w)-----------");
  //     console.log(typeof this.enid);
  //     myaxios.reqGet(
  //       api.DETAIL_API,
  //       {
  //         params: {
  //           entity_id: this.enid
  //         }
  //       },
  //       this.showData
  //     );
  //   }
  // }
};
</script>

<style scoped>
</style>