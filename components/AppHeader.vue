<template>
  <nav class="bg-gray-800 min-w-full mx-auto px-2 ">
    <div class=" flex items-center justify-between ml-20 mr-8 h-24">
      <div class=" space-x-4">
        <NuxtLink title="Home page" class="text-gray-300  px-3 py-2 text-lg font-medium hover:text-white" to="/"><fa icon="house-user"/></NuxtLink>
        <span title="Sidebar" class="text-gray-300 hover:text-white text-lg font-medium"><fa icon="bars" :class={sidebar:sidebarOpen}  @click="$emit('toggleSidebar')"/></span>
        <NuxtLink class="pl-2 text-gray-300 hover:text-white text-base font-medium" to="/movies"><fa icon="video"/>     Now streaming </NuxtLink>
      </div>
      <div class= "">
        <NuxtLink class="text-gray-300 hover:text-white px-3 py-2 text-base font-medium" to="/wishlist"><fa icon="heart"/> Wishlist <span class="text-gray-300 border-2 border-gray-400 rounded-md ml-2 px-1.5">{{counter}}</span> </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['sidebarOpen'],
    computed: {
        counter() {
            return this.$store.state.wishlist.list.length;
        },
    },    
  }
</script>

<style scoped>

.sidebar {
  color:#ffffff;
}

</style>
