<template>
    <h2>{{titles}}</h2>
</template>
<script>
export default {
    props:['titles']
}
</script>
<style>
    h2{
        text-align: left;
        font-size:16px;
        padding-bottom:20px;
    }
</style>