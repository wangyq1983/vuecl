<template>
  <div class="hihi">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'hi',
    data(){
      return {
        msg: "hi1,my name wyq"
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
