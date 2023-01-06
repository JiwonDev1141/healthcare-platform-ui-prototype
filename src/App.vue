<script setup>
import { RouterLink } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <v-app>
    <MainHeader />
  </v-app>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
