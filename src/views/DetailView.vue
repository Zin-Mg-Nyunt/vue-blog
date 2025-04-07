<template>
  <div v-if="error">
    {{error}}
  </div>
  <div v-if="blog=={}">
    <LoadingSpiner></LoadingSpiner>
  </div>
  <div v-else>
    <h2>{{blog.title}}</h2>
    <p>{{blog.body}}</p>
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