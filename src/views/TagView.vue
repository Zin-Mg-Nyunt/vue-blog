<template>
  <div v-if="error">
    {{error}}
  </div>

  <div v-if="blogs.length">
    <h1>Blogs</h1>
    <TagCloud :blogs="blogs"></TagCloud>
    <div class="blog-wrapper">
        <div v-for="blog in filteredBlog" :key="blog" class="blog-card">
            <router-link :to="{name:'detail',params:{id:blog.id}}">
                <h2>{{blog.title}}</h2>
                <p>{{blog.body}}</p>
            </router-link>
        </div>
    </div>
  </div>
  <div v-else>
    <LoadingSpiner></LoadingSpiner>
  </div>
</template>

<script>
import LoadingSpiner from '../components/LoadingSpiner'
import TagCloud from '../components/TagCloud'
import getBlogs from '@/composables/getBlogs'
import { computed } from 'vue'
export default {
  components: {
    LoadingSpiner, TagCloud },
    props: ['tag'],
    setup(props){
        let {blogs,error,load}=getBlogs()
        load()

        let filteredBlog=computed(()=>{ // filter blogs by incomming tag data
            return blogs.value.filter((blog)=>{
                return blog.tags.includes(props.tag)
        })
        })
        return{filteredBlog,blogs,error}
    }
}
</script>

<style>

</style>