<template>
  <v-container fluid style="min-height: 0;">
    <v-layout align-items-center jsutify-content-center row wrap>
      <v-flex>
        <v-card target="_blank" :href="url" style="max-width: 400px; margin: auto;">
          <v-img :src="image" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{name}}</h3>
              <br>
              <div>
                <ul>
                  <li v-for="ingredient in ingredients">{{ingredient.text}}</li>
                </ul>
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange" target="_blank" :href="url">See recipe</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['image', 'name', 'ingredients', 'url']
}
</script>

<style>
li {
  list-style: none;
  text-align: left;
}
</style>