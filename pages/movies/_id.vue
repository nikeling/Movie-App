<template>
  <div class="bg-gray-900 min-h-screen flex justify-center  ">
    <div class=" flex justify-center mt-24 mb-44 flex-col">
      <NuxtLink class=" w-16 text-center  mb-3 text-gray-100 font-medium p-2 rounded-md bg-red-900" :to="{ name: 'movies' }">Back</NuxtLink>
      <div class="flex flex-row">
        <div class="">
          <img class="w-full  " :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"/>
        </div>
        <div class="flex flex-col ml-5">
          <h2 class="text-2xl font-medium text-gray-100 flex-none">Title: {{movie.title}}</h2>
          <p class="text-gray-100 mt-5">
						<span class="underline">Released:</span>
						{{
							new Date(movie.release_date).toLocaleString('en-us', {
							month: 'long',
							day: 'numeric',
							year: 'numeric',
							})
						}}
            </p>
          <p class="text-gray-100 mt-3"><span class="underline">Duration:</span> {{ movie.runtime }} minutes</p>
          <p class=" text-gray-100 mt-3"><span class="underline">Rating:</span> {{ movie.vote_average }}</p>
          <p class="flex-1 text-gray-100 mt-3 w-96"><span class="underline">Overview:</span> {{ movie.overview }}</p>
          <button v-if="exist()" @click="remove" class=" onwishlist ml-2 text-sm p-2 rounded-md border-2 border-red-900 text-gray-200" type="button">Remove</button>
		    	<button v-else  @click="addToWishlist" class=" ml-2 text-sm p-2 rounded-md border-2 border-red-900 text-gray-200" type="button">Add to wishlist </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
 head() {
    return {
      title: this.movie.title,
    }
  },
  data() {
    return {
      movie: '',
    }
  },
    
    async asyncData({ params, $http }) {
      const movie = await $http.$get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=72aead46dc387c832ae8770a5ce288d1&language=en-US`)
      return { movie }
    },

    methods: {

      addToWishlist(){
        this.$store.dispatch('wishlist/addToWishlist', this.movie )
      },

      remove(){
		  this.$store.commit('wishlist/removeFromWishlist', this.movie)
	    },

      exist(){
		    const list = this.$store.state.wishlist.list;
        if (typeof list !== 'undefined' && list.length === 0) {
          return false;
        } else{
          const exists = list.filter(i => i.id === this.movie.id);
          	if (typeof exists !== 'undefined' && exists.length === 0) {
          	return false;
        	} else {
         	 return true;
        } }
      }
    }
}
</script>
<style scoped>
.onwishlist{
  background-color:#7F1D1D;
}
</style>