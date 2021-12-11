<template>
  <nav class="bg-gray-800 min-w-full mx-auto px-2 ">
    <div class=" flex items-center justify-between ml-20 mr-8 h-24">
            <div class=" space-x-4">
              <NuxtLink class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium px-3 py-2 rounded-md text-sm font-medium" to="/">Home</NuxtLink>
              <button type="button"  class="rounded border-gray-300 border-2 px-2 text-gray-300 hover:bg-gray-700 hover:text-white" :class={sidebar:sidebarOpen}  @click="$emit('toggleSidebar')"> Sidebar </button>
            </div>

            <div class= "">
              <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium" to="/wishlist">Wishlist <span class="text-gray-300 border-2 ml-2 px-1">{{counter}}</span> </NuxtLink>
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
  background-color:#4d4d4d;
}

</style>
