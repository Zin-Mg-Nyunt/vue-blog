<template>
  <h1>Blogs</h1>
  <TagCloud :blogs="blogs"></TagCloud>
  <div class="home blog-wrapper">
    <BlogList :blogs="blogs"></BlogList>
  </div>
</template>

<script>

import TagCloud from '../components/TagCloud'
import BlogList from '../components/BlogList'
import getBlogs from "../components/getBlogs";
export default {
  name: 'HomeView',
  components: {
    TagCloud,
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