<template>
  <div>
    <h1>Search Recipes</h1>
    <br>
    <form @submit.prevent="submit">
      <input placeholder="Ingredients" v-model="search" autofocus>
      <br>
      <input placeholder="Cuisine type" v-model="search" autofocus>
      <br>
      <input placeholder="Diet" v-model="search" autofocus>
      <br>
      <input placeholder="Dish type" v-model="search" autofocus>
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
  }
}
</script>

<style>
input {
  width: 400px;
  padding: 10px;
}
</style>