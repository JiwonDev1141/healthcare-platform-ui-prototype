<template>
    
    <div style="margin-top: 20px;">
        <span style="margin-right: 10px; ">계정이 없으신가요?</span>
        <span style="color:#F07A54; cursor:pointer;">Sign Up</span>
    </div>
    <form class="loginform" name="">
        <input class="loginform_inputBox" type="email" placeholder="E-mail"/>
        <input class="loginform_inputBox" type="password" placeholder="Password" />
        <div style="display: flex; margin-bottom: 10px; justify-content: flex-end;">
            <!-- <input class="loginform_checkBox" type="checkbox" />
            <span>Remember me?</span> -->
            <span style="color:#F07A54; cursor: pointer;">비밀번호를 잊으셨나요?</span>
        </div>
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
    padding: 20px;
}

.loginform_inputBox {
    border: solid 2px black;
    width: 100%;
    padding: 20px;
    margin: 0px 20px 20px 0px;
}

.loginform_checkBox {
    margin-right: 5px;
    
}
</style>