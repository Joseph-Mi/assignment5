<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <div class="view">
    <title>MovieMania</title>
    <h3>Purchases</h3>
  </div>
  <div class="buy">
    <div v-for="movie in store.cart">
      <h1>{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
    </div>
  </div>
</template>

<style scoped>
*{
  background-color: black;
  color: white;
}
</style>
