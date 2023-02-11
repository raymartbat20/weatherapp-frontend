<template>
    <div class="header">
        <div class="header-title">
            <img alt="Vue logo" src="https://cdn.cdnlogo.com/logos/w/44/weather-ios.svg" width="100" height="50" />
            <h1>Weather Forecast</h1>
        </div>
        <LogoutButton v-if="user" class="logout" />
    </div>
</template>

<script>
import LogoutButton from '@/components/auth0/LogoutButton.vue'
export default {
    props:{
        user: {
            type: Object,
            default: null,
        }
    },

    components:{
        LogoutButton,
    }
}
</script>

<style scoped>
.header {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  padding: 10px;
  margin-bottom: 150px;
  border-bottom: 1.5px solid #e3e3e3;
}

.header-title {
    display: flex;
    align-items: center;
}
.logout{
    display: block;
    float: right;
}
</style>