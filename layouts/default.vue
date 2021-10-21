<template>
  <div>
    <AppHeader @toggleSidebar= "sidebarOpen = !sidebarOpen"/>
    <Sidebar :open= "sidebarOpen"/>

    <Nuxt />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sidebarOpen: false
      }
    }
      

  }

</script>

<style>

</style>