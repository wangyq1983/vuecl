<template>
  <div class="hihi">
    <h2>{{msg}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data(){
      return {
        msg: "hi,my name wyq"
      }
    }
  }
</script>

<style>
  .hihi {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: #f00;
  }
</style>
