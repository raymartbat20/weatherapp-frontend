<template>
    <div class="message-container">
        <p class="welcome-message">Welcome to the weather forecast web applciation. Please login with your Github user to use the application and view the weather in your city</p>
    </div>
    <Auth0Login class="login-button" />
</template>

<script>
import Auth0Login from '@/components/auth0/Login.vue';

export default {
    components:{
        Auth0Login,
    },

    mounted(){
    if(this.$auth0.user?.nickname){
      window.localStorage.setItem('authUser',this.user);
    }

    const authenticatedUser = window.localStorage.getItem('authUser');
    if(authenticatedUser){
      this.$router.push('/weather-forecast')

      return;
    }
  }
}
</script>

<style scoped>
.message-container{
    margin-bottom: 10px;
}
.welcome-message{
    font-size: 16px;
}
.login-button{
    position: relative;
    display: flex;
    justify-items: end;
    justify-content: end;
}
</style>