export const state = () => ({
  recipes: [],
  queryString: ''
})

export const mutations = {
  addRecipes: function(state, recipes) {
    state.recipes = recipes
  },
  setParams: function(state, params) {
    state.queryString = ''
    for (const query in params) {
      if (params[query] !== '') {
        state.queryString += `&${query}=${params[query]}`
      }
    }
    console.log(state.queryString)
  }
}
