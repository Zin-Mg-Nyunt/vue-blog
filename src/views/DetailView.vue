<template>

  <div>
    <h2>{{blog.title}}</h2>
    <p>{{blog.body}}</p>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import getBlog from '@/composables/getBlog'
export default {
  components: { TagCloud },
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