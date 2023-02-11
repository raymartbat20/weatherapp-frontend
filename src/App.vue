<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/main/Header.vue'
import LandingPage from './views/LandingPage.vue'
</script>

<template>
  <div>
    <Header :user="user" />
    <div class="container">
      <LandingPage />
    </div>
  </div>

</template>

<script>
export default {
  components:{
    LandingPage,
  },

  data(){
    return {
      user: this.$auth0.user
    }
  }
}
</script>
<style scoped>
.container{
  width: 100%;
  padding-right: 500px;
  padding-left: 500px;
  margin-right: auto;
  margin-left: auto;
}
</style>
