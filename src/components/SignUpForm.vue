<template>

    <div style="margin-top: 20px;">


    </div>
    <form @submit="handleSignUp" ref="signUpForm" class="sign_up" name="">
        <input ref="emailInput" class="sign_up_inputBox" type="email" placeholder="E-mail" />
        <input ref="usernameInput" class="sign_up_inputBox" type="username" placeholder="Username" />
        <input ref="passwordInput" class="sign_up_inputBox" type="password" placeholder="Password" />
        <div style="display: flex; margin-bottom: 5px; justify-content: flex-end;">
            <!-- <input class="sign_up_checkBox" type="checkbox" />
            <span>Remember me?</span> -->
            <input type="checkbox" />
            <div>
                <span>이용약관</span>
                <span>에 동의하십니까?</span>

            </div>
        </div>
        <input class="sign_up_submit" type="submit" value="Sign Up" />
    </form>

</template>
<script>
import { RouterLink } from 'vue-router';
import axios from "axios";

export default {
    name: "SignUpForm",
    props: {
        siteColor: String
    },
    methods: {
        handleSignUp: function (e) {
            e.preventDefault();
            axios.post("http://localhost:3000/user", {

                email: this.$refs.emailInput.value,
                username: this.$refs.usernameInput.value,
                password: this.$refs.passwordInput.value

            }).then(result => {
                console.log(result)
            })
        }
    }
};
</script>
<style scoped>
.sign_up {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 30px;
}

.sign_up_submit {
    background-color: v-bind(siteColor);
    color: white;
    font-weight: 500;
    font-size: 20px;
    padding: 20px;
}

.sign_up_inputBox {
    border: solid 2px black;
    width: 100%;
    padding: 20px;
    margin: 0px 20px 20px 0px;
    color: black;
}

.sign_up_checkBox {
    margin-right: 5px;

}
</style>