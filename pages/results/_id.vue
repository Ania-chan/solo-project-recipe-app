<template>
  <div>
    <h1>Recipes using {{$route.params.id}}</h1>
    <div v-for="(recipe, index) in this.recipes">
      <Card
        :title="album.collectionCensoredName"
        :image="album.artworkUrl100"
        :artistName="album.artistName"
        :url="album.artistViewUrl"
        :color="picker(index)"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      search: '',
      recipes: []
    }
  },
  components: {
    // Card
  },
  mounted() {
    // console.log(this.$store.state)
    // fetchRecipes('zucchini', 'broccoli', 'carrots')
  },
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
    console.log(url)
    const res = await axios.get(url)
    const recipes = res.data.hits.map(recipe => {
      return recipe.recipe
    })
    this.recipes = recipes
  }
}
</script>