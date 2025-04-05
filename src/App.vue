<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components: { NavBar },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
#app {
  font-family: "PT Sans", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

</style>
