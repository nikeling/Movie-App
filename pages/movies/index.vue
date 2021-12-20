
<template>
    <div class="bg-gray-900 min-h-screen pb-10">
        <div class="ml-10 pt-5 flex flex-row space-x-14 items-center">
            <h1 class="font-sans text-5xl  text-red-800">NOW PLAYING</h1> 
            <h2 class="text-red-800" v-if="$fetchState.pending">loading...</h2>  
        </div>
        <div class= "grid lg:grid-cols-5 lg:grid-rows-4 gap-x-7 gap-y-10 ml-20 mt-20 mr-20 ">
            <LoadingCard v-if="$fetchState.pending"/>
            <MovieCard v-else v-for="movie in movies.results" :movie="movie" :key="movie.id"  />
        </div>
        <div class="flex justify-center gap-x-6">
            <button v-if="page > 1" class="flex-0 text-center text-gray-100 font-medium p-2 rounded-md bg-red-900" type="button" @click="previousPage">Previous</button>
            <button class="flex-0 text-center text-gray-100 font-medium p-2 rounded-md bg-red-900" type="button" @click="nextPage">Next</button>
        </div>
    </div>
</template>
<script>

export default {
    head() {
    return {
      title: 'Movie App - Now Playing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get all the latest streaming movies in theaters & online',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'movies, stream, stremaing',
        },
      ],
    }
  },
   data () {
      return {
          movies: [],
          page: 1,
      }
  },

  fetchDelay: 1000,
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
        },
    }
}
</script>


