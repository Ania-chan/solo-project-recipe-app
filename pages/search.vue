<template>
  <div class="search-form">
    <h1>Search Recipes</h1>
    <br>
    <form @submit.prevent="submit">
      <input placeholder="Ingredients" v-model="search" autofocus>
      <!-- <br>
      <input placeholder="Cuisine type" autofocus>
      <br>
      <input placeholder="Diet" autofocus>
      <br>
      <input placeholder="Dish type" autofocus>-->
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
.search-form {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
}
input {
  width: 400px;
  padding: 10px;
}
</style>