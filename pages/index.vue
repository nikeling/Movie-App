<template>
  <div>
    <h1 class="pl-3.5 pt-2 mt-24 bg-gray-800 text-red-800 font text-6xl">Movie App</h1>
    <p class="text-center  break-normal pt-8 bg-gray-800 text-gray-300 text-2xl">Discover, find and track <br> your favorite <br><span class="font-bold">movies</span></p>
    <form class="bg-gray-800 min-w-fit p-8 mb-60 flex flex-col content-center" @submit.prevent="Submit" >
      <label class="text-gray-500" for="fname">First name:</label>
      <input 
        v-model="fname"
        class="bg-white h-10 w-80 rounded-sm border-2 border-gray-300 focus:outline-none" 
        type="text" 
        id="fname" 
        name="fname">
        <p class="text-gray-300" v-if="errorfname">Please enter your first name.</p>
      <label class="text-gray-500" for="lname">Last name:</label>
      <input 
      v-model="lname" 
      class="bg-white h-10 w-80 rounded-sm border-2 border-gray-300 focus:outline-none" 
      type="text" 
      id="lname" 
      name="lname">
      <p class="text-gray-300" v-if="errorlname">Please enter your last name.</p>
      <button class="font-medium mt-5 text-white bg-green-500 h-10 w-80 rounded-sm mb-6" type="submit" value="Login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
    layout: 'auth',

    data(){
      return{
        fname:'',
        lname:'',
        errorfname: false,
        errorlname: false

      }
    },

    head() {
    return {
      title: 'Movie App - Latest Playing Movie Info',
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
  methods: {
    Submit(){
      console.log(this.fname, this.lname)
      this.Validate();
    },

    Validate(){
      if (this.fname.length === 0){
        this.errorfname = true;
      } else if (this.lname.length === 0){
        this.errorlname = true;
      } else {

      }

    },

  }

}
</script>

<style scoped>
.font {
font-family: 'Mochiy Pop P One', sans-serif;
}

</style>
