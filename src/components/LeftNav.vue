<template>
  <div>
    <div class="leftMenu" :style="{height:docHeight}">
      <div class="logo">
        <!-- {{aaa}} -->
      </div>
      <ul>
        <li :class="{cur:(here == 'sbgl')}">
          <router-link to="/sbgl" class="menuStyle">黑烟车识别管理</router-link>
        </li>
        <li :class="{cur:(here == 'tjfx')}">
          <router-link to="/tjfx" class="menuStyle">黑烟车统计分析</router-link>
        </li>
        <li :class="{cur:(here == 'sysmanage')}">
          <router-link to="/sysmanage" class="menuStyle">系统平台管理</router-link>
        </li>
        <li :class="{cur:(here == 'opermanage')}">
          <router-link to="/opermanage" class="menuStyle">运维管理</router-link>
        </li>

          <button @click="logout">注销</button>


      </ul>
    </div>
  </div>
</template>

<script>
import *as Util from '../util'
export default {
  data() {
    return {
      docHeight: document.documentElement.clientHeight + "px",
      isHere: ""
    };
  },
  props: ["here", "aaa"],
  mounted() {
    // console.log(document.documentElement.clientHeight);
    // console.log('props = ' + this.here + this.aaa);
    // console.log(typeof this.aaa);
  },
  methods: {
    logout: function() {
      //localStorage.removeItem(`isLogin`);
      Util.delCookie('sid');
      Util.delCookie('token');
      Util.delCookie('username');
      Util.delCookie('level');
      Util.delCookie('nickname');
      console.log('del')
      this.$router.push({ path: "/login" });
      console.log('logout')
    }
  }
};
</script>

<style>
.menuStyle {
  color: #fff;
  width: 200px;
  height: 60px;
  display: block;
}
.logo {
  width: 200px;
  height: 60px;
}
.leftMenu {
  width: 200px;
  background: #3384ff;
  float: left;
}
.leftMenu ul li {
  width: 200px;
  height: 60px;
  line-height: 60px;
  color: #fff;
}
.leftMenu ul li:hover,
.leftMenu ul li.cur {
  background: #1769e6;
}
</style>
