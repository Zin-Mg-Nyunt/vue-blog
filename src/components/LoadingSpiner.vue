<template>
  <div class="load"></div>
</template>

<script>
export default {

}
</script>

<style>
    .load{
        width: 60px;
        height: 60px;
        border: 3px solid transparent;
        border-radius: 50%;
        border-top-color: crimson;
        animation: spiner 1.2s linear infinite;
        margin: 100px auto;
    }
    @keyframes spiner {
        to{
            transform: rotate(360deg);
        }
    }
</style>