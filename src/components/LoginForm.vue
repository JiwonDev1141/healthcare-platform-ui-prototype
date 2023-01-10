<template>
    
    <div style="margin-top: 20px;">
        <span style="margin-right: 10px; ">계정이 없으신가요?</span>
        <span style="color:#F07A54;">Sign Up</span>
    </div>
    <form class="loginform" name="">
        <input type="email" placeholder="E-mail"/>
        <input type="password" placeholder="Password" />
        <input class="loginform_submit" type="submit" value="Sign In" />
    </form>
  
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
  name: "LoginForm",
  props: {
    siteColor: String
  }
};
</script>
<style scoped>
.loginform {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 30px;
}

.loginform_submit {
    background-color: v-bind(siteColor);
    color: white;
    font-weight: 500;
    font-size: 20px;
}

input {
    border: solid 2px black;
    width: 100%;
    padding: 20px;
    margin: 0px 20px 40px 0px;
}
</style>