<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{this.$store.state.count}}</h3>
    <div>
      <button @click="this.madd">+</button>
      <button @click="this.mreduce">-</button>
    </div>
    <router-link to="/">home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello vuex"
    };
  },
  methods: {
    madd: function() {
      this.$store.commit("add");
    },
    mreduce: function() {
      this.$store.commit("reduce");
    }
  }
};
</script>

<style>
</style>
