<template>
    <div class="subMenu">
                <!-- {{msg}} -->
                
                    
                        <router-link to="/sbgl/home" class="link">首页</router-link>
                    
                    
                        <router-link to="/sbgl/dwgl" class="link">点位管理</router-link>
                    
                    
                        <router-link to="/sbgl/hyclb" class="link">黑烟车列表</router-link>
                    
                    
                        <router-link to="/sbgl/shgl" class="link">审核管理</router-link>
                    
                    
                        <router-link to="/sbgl/yshgl" class="link">预审核管理</router-link>
                    
                
            </div>
</template>
<script>
export default {
  name: "submenu",
  data() {
    return {
      msg: "alibabashigekuailedeqingn"
    };
  },
  mounted:function(){
      //console.log('submenu1')
  },
  activated:function(){
      console.log('subb')
  }
};
</script>
<style>
.subMenu {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #e1f7ff;
  text-align: left;
}
.subMenu a {
  height: 56px;
  line-height: 56px;
  margin: 0 20px;
  padding: 0 10px;
  display: inline-block;
  color: #1769e6;
}
.subMenu a:hover,
.subMenu a.cur {
  border-bottom: 4px solid #1769e6;
}
.subMenu .router-link-active{
    border-bottom: 4px solid #1769e6;
}
</style>