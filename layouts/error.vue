<template>
  <div class="bg-gray-900 min-h-screen flex justify-center">
     <div class="flex justify-center flex-row rounded-md border-2 border-red-900 shadow-lg my-52">
         <div class="pt-28 pl-5">
             
             <h1 class="text-gray-300 font-sans text-2xl font-medium tracking-wide text-lefts" v-if="error.statusCode === 404">Page not found</h1>
             <h1 class="text-gray-300  font-sans text-lg font-medium tracking-wide text-lefts" v-else>An error occurred</h1>
         </div>

         <div class="ml-20 pt-5 pr-5">
             <NuxtLink class=" w-16 text-center justify-self-start mb-3 text-gray-100 font-medium p-2 rounded-md bg-red-900" to="/">Home page</NuxtLink>
             <img class="mt-10" src="error.svg"/>
         </div>
            
             
            
     </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error-layout' 
  }
</script>