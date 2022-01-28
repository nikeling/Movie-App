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

    methods: {
      mounted() {
        this.$store.commit('initialiseStore');
        localStorage.getItem('list')
      }
      
    }
  }

</script>

<style>

</style>