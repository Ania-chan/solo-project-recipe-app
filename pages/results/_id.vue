<template class="search-results">
  <v-layout row wrap>
    <v-flex>
      <h1>Recipes using {{$route.params.id}}</h1>
      <div v-for="(recipe) in this.$store.state.recipes">
        <Card
          :name="recipe.label"
          :image="recipe.image"
          :ingredients="recipe.ingredients"
          :url="recipe.url"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
export default {
  data() {
    return {
      search: ''
    }
  },
  components: {
    Card
  },
  layout: '_id',
  async fetch({ params, store }) {
    const ingredients = params.id.split(' ')
    const apiURL = 'https://api.edamam.com/search?q='
    const apiKey = '&app_key=40348d9b45407e7ebc14e1d80c816667'
    const apiId = '&app_id=e5e87a1b'
    const maxTime = '&time=30'
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
    const url = `${apiURL}${mappedIngreds}${maxIngreds}${maxTime}${apiId}${apiKey}`
    const res = await axios.get(url)
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