<template>
<div>
    <AppHeader  :sidebarOpen="sidebarOpen" @toggleSidebar= "sidebarOpen = !sidebarOpen"/>
    <Sidebar class="absolute" :open= "sidebarOpen"/>
    <div class="min-h-screen bg-contain flex justify-center "  style="background-image: url(wallpaper.jpg)">
   
    <Nuxt/>
    </div>
</div>

  
</template>

<script>
export default {
    data () {
      return {
        sidebarOpen: false
      }
    },

}
</script>

<style>

</style>