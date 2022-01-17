<template>
    <div class="bg-gray-900 pb-10 min-h-screen">
        <h1 class=" font ml-10 font-sans text-5xl pt-5 text-red-800">Wishlist</h1>
        <p v-if="this.$store.state.wishlist.list.length===0" class="mt-10 ml-24 text-gray-300 font-semibold text-xl">your wishlist is empty...</p>
        <div class= " grid lg:grid-cols-4 lg:grid-rows-5 gap-x-7 gap-y-10 ml-10 mt-20 mr-10 ">
            <MovieCard v-for="item in this.$store.state.wishlist.list" :movie="item" :key="item.id"  /> 
           
        </div>
    </div>
</template>

<script>
export default {
   
}

</script>

<style scoped>

.font {
font-family: 'Mochiy Pop P One', sans-serif;
}

</style>