<template>
  <nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4 items-baseline">
            
            
            <NuxtLink class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium px-3 py-2 rounded-md text-sm font-medium" to="/">Home</NuxtLink>
            

            <button type="button" class="rounded border-gray-300 border-2 px-2 text-gray-300 hover:bg-gray-700 hover:text-white" @click="$emit('toggleSidebar')"> Sidebar </button>


            <div>
              <NuxtLink class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/wishlist">{{counter}} Wishlist </NuxtLink>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  </div>

  
</nav>
</template>

<script>
  export default {
    computed: {
        counter() {
            return this.$store.state.wishlist.list.length;
        },
    },
      

  }
</script>

<style>

</style>
