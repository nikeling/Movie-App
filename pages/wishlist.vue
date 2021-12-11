
<template>
    <div class="bg-gray-900 pb-10">
        <h1 class="ml-7 font-sans text-5xl pt-5 text-red-800">WISHLIST</h1> 
        <div class= " grid lg:grid-cols-4 lg:grid-rows-5 gap-x-7 gap-y-10 ml-10 mt-20 mr-10 ">
            <MovieCard v-for="item in this.$store.state.wishlist.list" :movie="item" :key="item.id"  /> 
           
        </div>
    </div>

  
</template>

<script>
export default {
   
}

</script>

<style>

</style>