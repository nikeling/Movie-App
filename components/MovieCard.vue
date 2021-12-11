<template>
    <!-- Component Start -->
	
		
		<div class="mb-8 bg-gray-900 ">

				<div class=""> 
            		<img class="object-scale-down  w-full " :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"/>
           			<!-- <p >{{ movie.overview }}</p> -->
				</div>
		

				<div class="flex flex-col  ">
					<h4 class="font-sans text-xl text-gray-200  pt-2">{{ movie.original_title}} <span class="text-yellow-500 text-xl font-semibold"> &#9733; {{ movie.vote_average }}</span> </h4>
					<p class="text-gray-400 pb-2 mb-2">
						Released:
						{{
							new Date(movie.release_date).toLocaleString('en-us', {
							month: 'long',
							day: 'numeric',
							year: 'numeric',
							})
						}}
            		</p>
					<!-- <p >{{ movie.overview }}</p> -->
					<div class="flex flex-row">
						<NuxtLink class="p-2 text-sm rounded-md border-2 border-red-900 text-gray-200" :to="{ name: 'movies-id', params: { id: movie.id } }">More Info</NuxtLink>
						<button :class={onwishlist:onwishlist} @click="addToWishlist" class=" ml-2 text-sm p-2 rounded-md border-2 border-red-900 text-gray-200" type="button">Add to wishlist </button>
					</div>
				</div>
				
			
		</div>
		
	


</template>

<script>
export default {
    props: {
		movie: Object,
				
	},

	data() {
    return {
      onwishlist: false
    }
  },
 
	methods: {
    addToWishlist(){
      this.$store.commit('wishlist/addToWishlist', this.movie )
	   const list = this.$store.state.wishlist.list;
        if (typeof list !== 'undefined' && list.length === 0) {
          this.onwishlist = false;
        } else{
          const exists = list.filter(i => i.id === this.movie.id);
          if (typeof exists !== 'undefined' && exists.length === 0) {
          this.onwishlist = false;
        } else {
          this.onwishlist = true;
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