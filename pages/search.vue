<template>
  <div>
    <h1>Search Recipes</h1>
    <br>
    <form @submit.prevent="submit">
      <input placeholder="Enter ingredients" v-model="search" autofocus>
    </form>
  </div>
</template>


<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      apiURL: 'https://api.edamam.com/search?q=',
      apiKey: '&app_key=40348d9b45407e7ebc14e1d80c816667',
      apiId: '&app_id=e5e87a1b',
      maxTime: '&time=30',
      maxIngreds: `&ingr=10`,
      search: ''
    }
  },
  methods: {
    submit(event) {
      this.$router.push(`results/${this.search}`)
    }
  },
  async fetchRecipes(...ingredients) {
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
    const recipes = res.data
    console.log(recipes)
  },
  mounted: () => {
    // fetchRecipes('zucchini', 'broccoli', 'carrots')
    // console.log(this.$store.state.recipes)
  }
}
</script>