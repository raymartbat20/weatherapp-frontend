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
      <LandingPage v-if="!user" />
      <WeatherForecast v-else />
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

  mounted(){
    this.user = this.$auth0.user;
  }
}
</script>
<style scoped>
.container{
  width: 100%;
  padding-right: 300px;
  padding-left: 300px;
  margin-right: auto;
  margin-left: auto;
}
</style>
