<template>
  <div>
    <Button @click="logout" type="danger">Log out</Button>
  </div>
</template>
<script>
  export default {
    methods: {
      logout(){
        window.localStorage.removeItem('authUser');
        this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
      }
    }
  };
</script>