
<template>
    <div class="bg-gray-900 min-h-screen pb-10">
        <h1 class="ml-10 font-sans text-5xl pt-5 text-red-800">NOW PLAYING</h1> 
        <div class= " grid  lg:grid-cols-5 lg:grid-rows-4 gap-x-7 gap-y-10 ml-20 mt-20 mr-20 ">
            <MovieCard v-for="movie in movies.results" :movie="movie" :key="movie.id"  />
        </div>
        <div class="flex justify-center gap-x-6">
            <button class="flex-0 text-center text-gray-100 font-medium p-2 rounded-md bg-red-900" type="button" @click="previousPage">Previous</button>
            <button class="flex-0 text-center text-gray-100 font-medium p-2 rounded-md bg-red-900" type="button" @click="nextPage">Next</button>

        </div>
    </div>
</template>

<script>


export default {
   data () {
      return {
          movies: [],
          page: 1,
       
          
      }
  },
  async fetch() {
      this.movies = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=72aead46dc387c832ae8770a5ce288d1&language=en-US&page='+ this.page
      ).then(res => res.json());
    
    },
    methods:{
        nextPage(){
            ++this.page;
            this.$router.push({query: {page: this.page}})
            this.$fetch();
            
        },

        previousPage(){
            --this.page;
            this.$router.push({query: {page: this.page}})
            this.$fetch();
        }


    }
}

    
</script>


