<template>
  <header>
    <Navbar/>
  </header>

  <body>
    <RouterView/>
  </body>

  <footer>
    <!-- <Footerbar/> -->
  </footer>
</template>

<script>
import Navbar from '../src/components/navbar.vue'
export default { 
  name: 'App',
  components: {Navbar }
}
</script>

<style scoped>

</style>