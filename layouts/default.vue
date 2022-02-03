<template>
  <div>
    <AppHeader  :sidebarOpen="sidebarOpen" @toggleSidebar= "sidebarOpen = !sidebarOpen"/>
    <Sidebar class="absolute" :open= "sidebarOpen"/>

    <Nuxt />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sidebarOpen: false
      }
    },
  
    mounted() {
        this.$store.commit('wishlist/initialiseStore');
         }
    }
  
  

</script>

<style>

</style>