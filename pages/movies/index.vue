
<template>
    <div class="bg-gray-900 pb-10">
        <h1 class="ml-5 font-sans text-5xl pt-5 text-red-800">NOW PLAYING</h1> 
        <div class= " grid lg:grid-cols-4 lg:grid-rows-5 gap-x-7 gap-y-10 ml-10 mt-20 mr-10 ">
            <MovieCard v-for="movie in movies.results" :movie="movie" :key="movie.id"  />
        </div>
    </div>
</template>

<script>


export default {
   data () {
      return {
          movies: [],
       
          
      }
  },

  async fetch() {
      this.movies = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=72aead46dc387c832ae8770a5ce288d1&language=en-US&page=1'
      ).then(res => res.json());
    
    }
}

    
</script>


