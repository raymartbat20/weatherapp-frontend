<template>
  <div>
    <Button 
      v-if="!authenticatedUser"
      @click="login"
      type="success"
    >
      Log in
    </Button>
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
        window.localStorage.setItem('authUser',this.$auth0.user);
        this.$auth0.loginWithRedirect();
      }
    }
};
</script>