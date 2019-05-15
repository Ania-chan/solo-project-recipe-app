<template>
  <div class="search-form">
    <h1>Search Recipes</h1>
    <br>
    <form @submit.prevent="submit">
      <input placeholder="Ingredients" v-model="ingredients" autofocus required>
      <br>
      <input placeholder="Health issue" v-model="health" autofocus>
      <br>
      <input placeholder="Diet" v-model="diet" autofocus>
      <h5>One of “balanced”, “high-protein”, “high-fiber”, “low-fat”, “low-carb”, “low-sodium”</h5>
      <br>
      <div class="text-xs-center">
        <v-btn type="submit" round color="#C2185B" dark large>Search</v-btn>
      </div>
    </form>
  </div>
</template>


<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import { thisTypeAnnotation } from '@babel/types'

export default {
  data() {
    return {
      ingredients: '',
      diet: '',
      health: ''
    }
  },
  layout: 'default',
  methods: {
    submit(event) {
      const params = {
        diet: this.diet,
        health: this.health
      }
      this.$store.commit('setParams', params)
      this.$router.push(`results/${this.ingredients}`)
    }
  }
}
</script>

<style>
.search-form {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
}
input {
  width: 400px;
  padding: 10px;
}
h5 {
  color: #808080;
}
</style>