<template>
    <div>
        <div class="t_menu">
            <ul>
                <li @click="tmenu" data-id="1">t1</li>
                <li @click="tmenu" data-id="2">t2</li>
                <li @click="tmenu" data-id="3">t3</li>
            </ul>
        </div>
        <div class="t_con">
            <div v-if="menuid == 1">
                <button class="buttonStyle" @click="jumpBox(menuid)">{{menuid}}</button>
            </div>
            <div v-if="menuid == 2">
                <button class="buttonStyle" @click="jumpBox(menuid)">{{menuid}}</button>
            </div>
            <div v-if="menuid == 3">
                <button class="buttonStyle" @click="jumpBox(menuid)">{{menuid}}</button>
            </div>
        </div>
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <h1>
          {{menuid}}
        </h1>
        <p>
          {{cTitle}}{{cVer}}{{cCopy}}
        </p>
        <p>
          safsfdsadfsadfsdf
        </p>
      </el-dialog>
    </div>
</template>
<script>
  import *as Consts from '../../const';
  import *as Util from '../../util'
export default {
  data() {
    return {
      menuid: "1",
      dialogTableVisible : false,
      cTitle:Consts.TITLE,
      cVer:Consts.VER,
      cCopy:Consts.COPYRIGHT
    };
  },
  methods: {
    jumpBox:function (mid) {
      this.dialogTableVisible = true
    },
    tmenu: function(e) {
      console.log(e);
      console.log(e.target.dataset.id);
      console.log('tete'+this.tete(3));
      this.menuid = e.target.dataset.id;
    }
  }
};
</script>
<style>
  .buttonStyle{
    width:100px; height:30px; background: #ff0; border:1px solid #333;
  }
</style>
