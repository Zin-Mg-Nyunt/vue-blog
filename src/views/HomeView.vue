<template>
  <h1>Blogs</h1>
  <div v-if="blogs.length==0">
    <LoadingSpiner></LoadingSpiner>
  </div>
  <div v-else>
    <TagCloud :blogs="blogs"></TagCloud>
    <div class="home blog-wrapper">
      <BlogList :blogs="blogs"></BlogList>
    </div>
  </div>
</template>

<script>

import LoadingSpiner from '../components/LoadingSpiner'
import TagCloud from '../components/TagCloud'
import BlogList from '../components/BlogList'
import getBlogs from "../composables/getBlogs";
export default {
  name: 'HomeView',
  components: {
    LoadingSpiner,
    TagCloud,
    BlogList,
    
  },
  setup(){
    let {blogs,error,load}=getBlogs()

    load()
    console.log(blogs.value)

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