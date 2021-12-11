<template>

<div v-if = "open">
  <div class="flex min-h-screen flex-col  md:w-64 text-gray-700 bg-white flex-shrink">
    <div class="flex-shrink-0 px-8 py-4 ">
      <h3 class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">SIDEBAR</h3>
    </div>

    <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
      <NuxtLink class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 rounded-lg" to="/movies"> Now playing </NuxtLink>
      <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 rounded-lg"> Link 1</a>
      <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 rounded-lg"> Link 2</a>
      <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 rounded-lg"> Link 3</a>
    </nav>
  </div>
</div>
</template>

<script>
  export default {
    props: ['open']
      

  }
</script>

<style>

</style>