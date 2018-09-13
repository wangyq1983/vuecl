<template>
    <div>
        <LeftNav here="sbgl" v-bind:aaa='msg'></LeftNav>
        <div class="con">
            <SubMenu></SubMenu>
            <div class="realCon" :style="{height:realHeight}">
                <keep-alive>
                <router-view />
                </keep-alive>
                    
                
            </div>
        </div>
    </div>
</template>

<script>
import LeftNav from "./LeftNav";
import SubMenu from "./SubMenu";
export default {
  name: "sbgl",
  data() {
    return {
      msg: "123",
      realHeight: document.documentElement.clientHeight - 60 + "px"
    };
  },
  components: {
    LeftNav,
    SubMenu
  }
};
</script>

<style>
@import "../assets/css/public";
.con {
  margin-left: 200px;
}
</style>