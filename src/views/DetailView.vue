<template>

  <div v-if="blog">
    <h2>{{blog.title}}</h2>
    <p>{{blog.body}}</p>
  </div>
  <div v-else>
    <LoadingSpiner></LoadingSpiner>
  </div>
</template>

<script>
import LoadingSpiner from '../components/LoadingSpiner'
import TagCloud from '../components/TagCloud'
import getBlog from '@/composables/getBlog'
export default {
  components: {
    LoadingSpiner, TagCloud },
    props:['id'],
    setup(props){
        let {blog,error,load}=getBlog(props.id)
        load()

        return {blog,error}
    }
}
</script>

<style>

</style>