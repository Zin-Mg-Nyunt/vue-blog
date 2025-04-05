<template>
  <router-link :to="{name:'detail',params:{id:blog.id}}">
    <div class="blog-card">
        <h2>{{blog.title}}</h2>
        <p>{{cutBody}}</p>
    </div>
  </router-link>
</template>

<script>
import { computed } from 'vue'
export default {
    props:['blog'],
    setup(props){
        let cutBody = computed(()=>{
            return props.blog.body.substring(0,50)+"...";
        })
        return {cutBody}
    }
}
</script>

<style>
    .blog-card{
        width: 250px;
        border: 2px solid #0092ef;
        border-radius: 10px;
        padding: 10px 20px;
        background-color: #070e27;
        color: white;
        cursor: pointer;
        user-select: none;
    }
    h2{
        font-weight: bold;
        font-size: 35px;
        text-align: center;
    }
    a{
        text-decoration: none;
    }
</style>