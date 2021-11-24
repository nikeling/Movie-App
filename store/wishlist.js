export const state = () => ({
    list: []

    
  })
  
export const mutations = {

  initialiseStore(state){
    if (localStorage.getItem('list')) {
    try {
      state.list = JSON.parse(localStorage.getItem('list'));
    } catch(e) {
      localStorage.removeItem('list');
    }  
  }},

  addToWishlist(state, movie) {
    if (typeof state.list !== 'undefined' && state.list.length === 0) {
        state.list.push(movie)
        console.log(state.list)
    } else{
        const exists = state.list.filter(i => i.id === movie.id);
        if (exists.length) {
          exists[0].quantity = parseInt(exists[0].quantity) + parseInt(movie.quantity)
        } else {
          state.list.push(movie)
          console.log(state.list) }
        
    }

    localStorage.setItem('list', JSON.stringify(state.list))
  },
  
  clearList(state) {
    state.list = { list: [] }

    localStorage.setItem('list', JSON.stringify(state.list))
  }
}
  
// export const actions = {

//   addToWishlist(context) {
//     context.commit('addToWishlist')
//   }
// }

export const getters = {
  getList(state){
    return state.list;
  },
  
  getListLenght(state){
    return state.list.length;
  }
  
}