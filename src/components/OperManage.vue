<template>
    <div>
        <LeftNav here="opermanage"></LeftNav>
        <div>
            <div class="subMenu">
                首页
                点位管理
                黑烟车列表
                审核管理
                预审核管理
                opermanage    
            </div>
        </div>
        
    </div>
</template>

<script>
import LeftNav from "./LeftNav";
export default {
  name: "opermanage",
  data() {
    return {};
  },
  components: {
    LeftNav: LeftNav
  }
};
</script>

<style>
.subMenu {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #e1f7ff;
}
</style>