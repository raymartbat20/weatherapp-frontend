<template>
  <div>
    <h2>{{ authenticatedUser }}</h2>
    <button @click="login" v-if="!authenticatedUser">Log in</button>
  </div>
</template>
<script>
import { useAuth0 } from '@auth0/auth0-vue';
export default {
    data(){
        return {
            authenticatedUser: this.$auth0.user
        }
    },
    methods: {
      login() {
        this.$auth0.loginWithRedirect();
      }
    }
};
</script>