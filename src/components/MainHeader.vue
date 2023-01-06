<template>

    <v-app-bar class="d-flex fixed" :color="bgColor" name="app-bar">
      
      <v-app-bar-title style="width: 20vw;">
        <img v-if="appIconSrc" style="width: 80px; height: 100%;" :src="appIconSrc" alt="">
      </v-app-bar-title>

      <RouterLink to="/jeju-diver" style="color: black; margin-right: 10px;">제주 해녀</RouterLink>
      
      <RouterLink to="/mirmeta-care" style="color: black">미르 메타케어</RouterLink>
      
      <!-- <v-app-bar-nav-icon style="width: 80px; font-size: 14px;" v-for="item in pages">{{ item }}</v-app-bar-nav-icon> -->

      
    </v-app-bar>
  
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
  name: "MainHeader",
  props: {
    appIconSrc: String, // 메인 아이콘 경로
    pages: Array, // 네비게이션 페이지 목록
    bgColor: String // 헤더 background color
  }
};
</script>
<style>

</style>