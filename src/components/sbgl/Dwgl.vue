<template>
    <div class="subCon">
        <SubTitle titles="点位列表" />
        <div class="filterBar">
            省份 <el-input v-model="shengfen" placeholder="省份"></el-input>
            区县 <el-input v-model="quxian" placeholder="区县"></el-input>
            <span style="padding-left:10px;">状态</span>
            <el-select v-model="selectState" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <span style="padding-left:10px;">时间</span>
            <el-date-picker
                v-model="value13"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="timestamp"
                :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
            <el-button type="primary" style="margin-right:30px;">筛选</el-button>

            <el-select v-model="orderBy" placeholder="请选择" class="orderBy">
                <el-option
                v-for="oitem in orders"
                :key="oitem.value"
                :label="oitem.label"
                :value="oitem.value">
                </el-option>
            </el-select>
            <el-button type="primary">排序</el-button>
        </div>
        <div style="width:100%;">
            <table class="tableList">
                <tr style="background:#ddd">
                    <th>点位名称</th>
                    <th>省份</th>
                    <th>区县</th>
                    <th>IP地址</th>
                    <th>点位状态</th>
                    <th>车流量</th>
                    <th>疑似黑烟车</th>
                    <th>黑烟车比例</th>
                </tr>
                <!--<tr v-for = "(dsList,index) in dsLists">-->
                    <!--<td>{{index}}+{{dsList.gid}}</td>-->
                    <!--<td>{{dsList.name}}</td>-->
                    <!--<td>1</td>-->
                    <!--<td>1</td>-->
                    <!--<td>1</td>-->
                    <!--<td>1</td>-->
                    <!--<td>1</td>-->
                    <!--<td><el-button type="primary" round>查看</el-button></td>-->
                <!--</tr>-->
                
                  <tr v-for="(yjjList,index) in yjjLists">
                    <td>{{index}}+{{yjjList.entity_id}}</td>
                    <td>{{yjjList.name}}</td>
                    <td>{{yjjList.orgname}}</td>
                    <td>{{yjjList.address}}</td>
                    <td>{{yjjList.platform_count}}</td>
                    <td>{{yjjList.question_desc[0]}}</td>
                    <td>{{yjjList.orgcode}}</td>
                    <td>
                      <div>
                        <router-link target="_blank" :to="{path:'/sbgl/detail',query:{ entity_id:yjjList.entity_id }}" class="link">详情新页</router-link>
                        <!-- <router-link to="/sbgl/detail" class="link">详情新页</router-link> -->
                      </div>
                      <div @click="showDialog(yjjList.entity_id)">
                        详情弹层
                      </div>
                      
                    </td>
                  </tr>
                
            </table>
            <el-dialog
                      :before-close="handleClose"
                        :visible.sync="dialogVisible"
                        width="30%">
                               
                        <Detail :enid="this.$store.state.enid">
                          <span style="color:#f00">试验一下solt</span>
                        </Detail>
                        <span slot="footer" class="dialog-footer"></span>
                      </el-dialog>
        </div>
      <h5>el-pagination</h5>
        <el-pagination
            background
            layout=" prev, pager, next, jumper"
            @current-change="handleCurrentChange"
            :page-size = "20"
            :total="total" style="margin-top:30px;">
        </el-pagination>
    </div>

</template>
<script>
import SubTitle from "../SubTitle";
import * as Util from "../../util";
import myaxios from "../../promise/myaxios";
import * as api from "../../promise/apiList";
import Detail from "../Detail";
import store from "@/vuex/store";
var api3 = api.YUJING_API;

export default {
  data() {
    return {
      total: 150, // 记录总条数
      display: 10, // 每页显示条数
      current: 1, // 当前的页数
      shengfen: "",
      quxian: "",
      value13: [],
      dsLists: [],
      yjjLists: [],
      orders: [
        {
          value: 1,
          label: "按疑似黑烟车数量"
        }
      ],
      options: [
        {
          value: 1,
          label: "正常"
        },
        {
          value: 2,
          label: "异常"
        },
        {
          value: 3,
          label: "停用"
        }
      ],
      orderBy: "按疑似黑烟车数量",
      selectState: "",
      dialogVisible: false,
      enid: ""
    };
  },
  methods: {
    showData: function(response) {
      console.log(response);
      console.log(response.data.data.entitys);
      this.yjjLists = response.data.data.entitys;
      this.total = Number(response.data.data.count);
    },
    handleCurrentChange: function(curpage) {
      console.log(curpage);
      myaxios.reqGet(
        api3,
        {
          params: {
            from: (curpage - 1) * 20 + 1,
            to: (curpage - 1) * 20 + 20,
            entity_name: "",
            entity_id: "",
            orgcode: "",
            qid: "",
            platform: ""
          }
        },
        this.showData
      );
    },
    showDialog: function(entid) {
      //this.enid = entid;
      this.$store.dispatch("changeaid", entid);
      this.dialogVisible = true;
    },
    handleClose: function(done) {
      this.dialogVisible = false;
      done();
    }
  },
  components: {
    SubTitle,
    Detail
  },

  created: function() {
    myaxios.reqGet(
      api3,
      {
        params: {
          from: (this.current - 1) * 20 + 1,
          to: (this.current - 1) * 20 + 20,
          entity_name: "",
          entity_id: "",
          orgcode: "",
          qid: "",
          platform: ""
        }
      },
      this.showData
    );
  },
  updated: function() {
    console.log(this.value13[0]);
  },
  activated() {
    // 使用keepalive缓存后才出现的生命周期，通过判断  执行ajax请求函数
  }
};
</script>
<style>
@import "../../assets/css/public";
.el-input {
  width: 90px;
}
.orderBy .el-input {
  width: 160px;
}
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 240px;
}
</style>
