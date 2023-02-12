<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/main/Header.vue'
import LandingPage from './views/LandingPage.vue'
import WeatherForecast from './views/WeatherForecast.vue'
</script>

<template>
  <div>
    <Header :user="user" />
    <div class="container">
      <RouterView />
    </div>
  </div>

</template>

<script>
export default {
  components:{
    LandingPage,
    WeatherForecast
  },

  data(){
    return {
      user: this.$auth0.user
    }
  },

  beforeCreate(){
    this.user = this.$auth0.user;
  },

  mounted(){
    if(this.$auth0.user?.nickname){
      window.localStorage.setItem('authUser',this.user);
    }

    const authenticatedUser = window.localStorage.getItem('authUser');
    // if(authenticatedUser){
    //   this.$router.push('/weather-forecast')

    //   return;
    // }
  }
}
</script>
<style scoped>
.container{
  width: 100%;
  padding-right: 700px;
  padding-left: 700px;
  margin-right: auto;
  margin-left: auto;
}
</style>
