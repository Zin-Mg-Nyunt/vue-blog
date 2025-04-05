<template>
  <div class="home blog-wrapper">
    <BlogList :blogs="blogs"></BlogList>
  </div>
</template>

<script>

import BlogList from '../components/BlogList'
import getBlogs from "../components/getBlogs";
export default {
  name: 'HomeView',
  components: {
    BlogList,
    
  },
  setup(){
    let {blogs,error,load}=getBlogs()

    load()

    return {blogs,error}
  }
}
</script>
<style>
    h1{
      font-size: 70px;
      color: #070e27;
      text-align: center;
    }
    .blog-wrapper{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 50px;
    }
</style>
