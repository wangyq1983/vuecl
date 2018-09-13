<template>
  <div>
    <div>账户 <input type="text" id="username" ref="username" v-model.trim="username"></div>
    <div>密码 <input type="password" id="password" ref="password" v-model.trim="password"></div>
    <div>
      <div v-if="isempty">{{loginEmpty}}</div>
      <div v-if="iserror">{{loginError}}</div>
    </div>
    <div>
      <button id="login" @click="eventEnter">登录</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import *as api from '../promise/apiList';
  import *as Util from '../util';
  import qs from 'qs'
  //var loginapi = api.LOGIN_API;
  var userName = 'admin';
  var passWord = '123456';
  export default {
    data(){
      return {
        username: '',
        password: '',
        isempty: false,
        iserror: false,
        loginError: '账户名称或密码错误,请重新输入!',
        loginEmpty: '账户或密码不可为空!',
      }
    },
    methods: {
      saveData:function (response) {
//        localStorage.setItem('isLogin',true);
        console.log(response);
        if(response.data.state == 200){
          Util.setCookie('sid',response.data.data.sid,3);
          Util.setCookie('username',response.data.data.username,3);
          Util.setCookie('token',response.data.data.token,3);
          Util.setCookie('nickname',response.data.data.nickname,3);
          Util.setCookie('level',response.data.data.level,3);
          this.$router.push({path:'/'});
        }else{
          this.iserror = true;
        }

      },
      eventEnter: function () {
        this.isempty = false;
        this.iserror = false;
        if (this.username == '' || this.password == '') {
          this.isempty = true;
        } else {
          let params = {
            username:this.username,
            password:this.password
          };
          var loginapi = api.LOGIN_API + '?province='+53;
          axios.post(loginapi, qs.stringify(params))
            .then(response => {
              this.saveData(response)
            }).catch(function (error) {
              alert('catcherr')
              console.log(error);
          });
        }
        //let username = this.$refs.username.value;
        //let password = this.$refs.password.value;
//        if (this.username == userName && this.password == passWord) {
//          console.log('success');
//          //this.$router.go('/');
//          localStorage.setItem('isLogin',true);
//          this.$router.push({path:'/'});
//        }else{
//          if (this.username == '' || this.password == '') {
//            this.isempty = true;
//          }else{
//            this.iserror = true
//          }
//        }
//        console.log('enter');
      }
    }
  }
</script>

<style>

</style>
