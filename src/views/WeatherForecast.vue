<template>
    <div class="container" v-show="this.user?.nickname">
        <p class="mb-5 text">{{ name }}</p>
        <a target="_blank" :href="githubLink" class="mb-5 text">{{ githubLink }}</a>
        <form @submit.prevent="submitForm" class="container">
            <Input inputType="text" v-model="search" class="mb-5" icon="magnifying-glass" />
            <p class="text-danger mb-5" v-show="hasError">{{ errorMessage }}</p>
            <Button :disabled="fetching" buttonType="submit" type="default" class="mb-5 btn">{{ buttonText }}</Button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import CommonMixins from '@/common/mixins/CommonMixins'
import WeatherForecastApi from '@/services/weatherforecast/api'
export default {
    mixins: [CommonMixins],
    data(){
        return {
            user: null,
            search: "",
            hasError: false,
            errorMessage: "",
            fetching: false
        }
    },

    computed: {
        githubLink(){
            return `https://github.com/${this.user?.nickname}`
        },
        name(){
            return this.user?.name
        },
        buttonText(){
            return this.fetching ? "Loading..." : "Display Weather"
        }
    },

    methods:{
        async submitForm(){
            this.hasError = false;
            this.fetching = true;
            let queryParams = this.setQueryParameter({search: this.search});
            const res = await WeatherForecastApi.getWeather(queryParams)
            
            if(res.status === 422 || res.data.forecast.status === "404"){
                this.hasError = true;
                this.errorMessage = res.status === 422 ? res.message : res.data.forecast.message
            }

            this.fetching = false;
        }
    },

    beforeMount(){
        this.user = this.$auth0.user;
    },
}
</script>

<style scoped>
.container{
    display: flex;
    flex-flow: column;
    align-items: center;
}

.text{
    font-size: 16px;
}

.mb-5{
    margin-bottom: 5px;
}

.text-danger {
    color: red;
}
</style>