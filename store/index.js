export const state = () => ({
  recipes: []
})

export const mutations = {
  addRecipes: function(state, recipes) {
    state.recipes = recipes
  }
}
