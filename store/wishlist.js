export const state = () => ({
    list: []

    
  })
  
export const mutations = {
  
  initialiseStore(state){
    if (localStorage.getItem('list')) {
    try{
      state.list = JSON.parse(localStorage.getItem('list'));
    }catch(e){
      localStorage.removeItem('list')
    }}
  },

  addToWishlist(state, movie) {
    if (typeof state.list !== 'undefined' && state.list.length === 0) {
        state.list.push(movie)
    } else{
        const exists = state.list.filter(i => i.id === movie.id);
        if (typeof exists !== 'undefined' && exists.length === 0) {
          state.list.push(movie)
        } else {
          for( var i = 0; i < state.list.length; i++){ 
              if ( state.list[i] === exists[0]) { 
                  state.list.splice(i, 1); 
              }
          }
        } 
    }
    localStorage.setItem('list', JSON.stringify(state.list))
  },

  removeFromWishlist(state,movie){
    const exists = state.list.filter(i => i.id === movie.id);
    for( var i = 0; i < state.list.length; i++){ 
      if ( state.list[i] === exists[0]) { 
          state.list.splice(i, 1); 
      }} 
    localStorage.setItem('list', JSON.stringify(state.list))
  },
  
  clearList(state) {
    state.list = [];

    localStorage.removeItem('list')
  }
}
  
export const actions = {
  addToWishlist(context, movie) {
    context.commit('addToWishlist', movie)
  }

}

export const getters = {
  getList(state){
    return state.list;
  },
  
  
  
}