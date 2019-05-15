<template class="search-results">
  <v-container grid-list-lg>
    <v-layout align-items-center>
      <v-flex md-3>
        <h1>Recipes using {{$route.params.id}}</h1>
        <div v-for="(recipe) in this.$store.state.recipes" :key="recipe.url">
          <Card
            :name="recipe.label"
            :image="recipe.image"
            :ingredients="recipe.ingredients"
            :url="recipe.url"
          />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
export default {
  components: {
    Card
  },
  layout: 'results',
  async fetch({ params, store }) {
    const ingredients = params.id.split(' ')
    const apiURL =
      'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q='
    const apiKey = '&app_key=40348d9b45407e7ebc14e1d80c816667'
    const apiId = '&app_id=e5e87a1b'
    const maxIngreds = `&ingr=10`
    const mappedIngreds = ingredients
      .map((ingredient, idx) => {
        if (idx < ingredients.length - 1) {
          return ingredient + '+'
        } else {
          return ingredient
        }
      })
      .join('')
    const url = `${apiURL}${mappedIngreds}${maxIngreds}${apiId}${apiKey}${
      store.state.queryString
    }`
    console.log(url)
    const res = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const recipes = res.data.hits.map(recipe => {
      return recipe.recipe
    })
    this.recipes = recipes
    store.commit('addRecipes', recipes)
  }
}
</script>

<style>
.search-results {
  background-color: white;
}
</style>