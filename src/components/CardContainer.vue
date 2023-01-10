<template>

    <div class="container" name="">
        <div class="area_1">

            <h3 class="site_title">{{ siteTitle }}</h3>
            <p class="site_description">{{ siteDescription }}</p>

        </div>
        <div class="area_2">
            
            <img style="width: 50px; height: 50px; position: relative; left: 80%" :src="siteMarkSrc" />

            <h4 class="page_title">{{ pageTitle }}</h4>
            <LoginForm :siteColor="siteColor" />
            
        </div>
       
    
      
    </div>
  
</template>
<script>
import { RouterLink } from 'vue-router';
import LoginForm from './LoginForm.vue';

export default {
    name: "CardContainer",
    props: {
        siteTitle: String,
        siteColor: String,
        siteDescription: String,
        pageTitle: String,
        siteMarkSrc: String,
        isLoginPage: Boolean // 로그인 페이지일 경우 디자인이 약간 달라짐
    },
    components: { LoginForm }
};
</script>
<style scoped>
.nav_btn {
  color: v-bind(color); 
}

.container {
    border-radius: 30px;
    border: solid 2px black;
    width: 80vw;
    height: 60vh;
    display: flex;
    
}

.site_title {
    color: white;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 25px;
}

.page_title {
    font-size: 20px;
    margin-top: 5%;
    /* margin-left: 1%; */
    font-weight: 600;
}

.site_description {
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    margin: 0;
    text-align: left;
}

.area_1 {
    background-color: v-bind(siteColor);
    width: 40%;
    height: 100%;
    display: flex;
    align-items:flex-start;
    padding: 0 30px 40px 30px;
    border-radius: 30px 0 0 30px;
    justify-content: center;
    flex-direction: column;
}

.area_2 {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 20px 30px 40px;
    align-items: flex-start;
}
</style>