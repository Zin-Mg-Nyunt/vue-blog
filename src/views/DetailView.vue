<template>
  <div v-if="error">
    {{error}}
  </div>
  <div v-if="blog==null">
    <LoadingSpiner></LoadingSpiner>
  </div>
  <div v-else>
    <h2>{{blog.title}}</h2>
    <p>{{blog.body}}</p>
    <button class="deleteBtn" @click="deleteBlog">Delete</button>
  </div>
</template>

<script>
import LoadingSpiner from '../components/LoadingSpiner'
import TagCloud from '../components/TagCloud'
import getBlog from '@/composables/getBlog'
import { db } from '@/firebase/config'
import { useRouter } from 'vue-router'
export default {
  components: {
    LoadingSpiner, TagCloud },
    props:['id'],
    setup(props){
      let router = useRouter();
      let {blog,error,load}=getBlog(props.id)
      load()
      let deleteBlog=async()=>{
        await db.collection("blogs").doc(props.id).delete()
        router.push('/');
      }
      return {blog,error,deleteBlog}
    }
}
</script>

<style>
  button.deleteBtn{
    margin-top: 50px;
    background-color: crimson;
  }
</style>