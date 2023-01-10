<script setup>
import { RouterLink } from 'vue-router';
import CardContainer from './components/CardContainer.vue';
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <div class="main_container">

    <CardContainer 
      siteColor="#03C9D7" 
      siteTitle="미르 메타케어" 
      pageTitle="Login"
      siteMarkSrc="/assets/icons/mirmetacare_logo.png"
      siteDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
    
    </CardContainer>
  </div>
  <router-view />
</template>

<style scoped>
.main_container {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
 
}
</style>
<!-- siteTitle: String,
bgColor: String,
siteDescription: String,
pageTitle: String,
siteMarkSrc: String,
isLoginPage: Boolean -->