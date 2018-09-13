<template>
  <div id="app">
    <!-- <Login></Login> -->
    <!-- <Main></Main> -->
    <!--<img src="./assets/logo.png">-->
    <keep-alive>
    <router-view />
    </keep-alive>
    
    <!--<div>-->
      <!--<i class="icon iconfont icon-unlock"></i>-->
      <!--<router-link to="/" class="aaa">-->
        <!--<span>123</span>  首页-->
      <!--</router-link>-->
      <!--<router-link to="/hi">hi</router-link>-->
      <!--<router-link to="/hi/hi1">hi1</router-link>-->
      <!--<router-link to="/hi/hi2">hi2</router-link>-->
      <!--<router-link to="/main">main</router-link>-->
      <!--<router-link to="/login">login</router-link>-->
    <!--</div>-->
  </div>
</template>

<script>
import Main from "./components/Main";
import Login from "./components/Login";
export default {
  name: "App",
  components: {
    Main: Main,
    Login: Login
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.aaa {
  color: #ccc;
  text-decoration: none;
}
</style>
