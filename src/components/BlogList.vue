<template>
  <div v-for="blog in blogs" :key="blog" >
    <SingleBlog :blog="blog"></SingleBlog>
  </div>
</template>

<script>
import SingleBlog from './SingleBlog'
export default {
  components: { SingleBlog },
    props:['blogs']
}
</script>

<style>

</style>