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
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submit(event) {
      this.$router.push(`results/${this.search}`)
    }
  },
  mounted() {
    // fetchRecipes('zucchini', 'broccoli', 'carrots')
  }
}
</script>