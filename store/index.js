export const state = () => ({
  recipes: []
})

export const mutations = {
  addRecipes(recipes, state) {
    state.recipes = recipes
  }
}
