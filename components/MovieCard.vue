<template>
    <!-- Component Start -->
	
		
		<div class="mb-8    bg-gray-900 ">
				<div class="relative"> 
            		<img class="object-scale-down  w-full " :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"/>
					<p class="absolute top-0 left-0 bg-yellow-500 w-10 h-9 text-lg rounded-br-md flex justify-center shadow-md text-gray-50 font-semibold">{{ movie.vote_average }}</p>
           			<!-- <p >{{ movie.overview }}</p> -->
				</div>
		

				<div class="">
					<h4 class="font-sans text-xl text-gray-200  pt-2">{{ movie.original_title}}</h4>
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
					<div>
						<NuxtLink class="p-2 rounded-md border-2 border-red-900 text-gray-200" :to="{ name: 'movies-id', params: { id: movie.id } }">More Info</NuxtLink>
						<button @click="addToWishlist" class=" ml-2 p-2 rounded-md border-2 border-red-900 text-gray-200" type="button">Add to wishlist </button>
					</div>
				</div>
				
			
		</div>
		
	


</template>

<script>
export default {
    props: {
		movie: Object,
				
	},
 
	methods: {
    addToWishlist(){
      this.$store.commit('wishlist/addToWishlist', this.movie )
    }
    }

}
</script>

<style>

</style>