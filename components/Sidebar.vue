<template>

<div v-if = "open">
  <div class="flex min-h-screen flex-col  md:w-64 text-gray-700 bg-white flex-shrink">
    <div class="flex-shrink-0 px-8 py-4 ">
      <h1 class="pt-2 tracking-widest text-red-800 font text-base">Movie App</h1>
    </div>

    <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
      <NuxtLink class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 rounded-lg" to="/movies"> Now streaming </NuxtLink>
      <NuxtLink class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 rounded-lg" to="/wishlist"> Wishlist </NuxtLink>
      <p class="text-red-800 px-4 font-semibold pt-4">Related websites:</p>
      <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 rounded-lg" href="https://www.rottentomatoes.com/"> Rotten Tomatoes</a>
      <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 rounded-lg" href="https://www.imdb.com/"> IMDb</a>
      <a class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 hover:bg-gray-200 rounded-lg" href="https://www.themoviedb.org/"> TMDB</a>
    </nav>
  </div>
</div>
</template>

<script>
  export default {
    props: ['open']
      

  }
</script>

<style scoped>
.font {
font-family: 'Mochiy Pop P One', sans-serif;
}

</style>