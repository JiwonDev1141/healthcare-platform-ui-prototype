
<template>
  <v-app>
    <MainHeader 
      appIconSrc="/assets/icons/jejuhanyeo_logo.svg"
      :pages="pages"
      bgColor="blue"
    />
  </v-app>
</template>

<script setup>
import MainHeader from '../../components/MainHeader.vue';

const pages = ["통계 정보", "기기 목록", "해녀 목록", "관리자 목록"]






</script>


<style scoped>

</style>