<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link :to="{name:'create'}">Add Blog</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    nav{
        text-align: end;
        padding: 20px 0;
    }
    nav a{
        margin: 0 15px;
        font-size: 30px;
        font-weight: bolder;
        color: lightgray;
        letter-spacing: 1px;
    }
    a.router-link-active{
        color: #070e27;
    }
</style>