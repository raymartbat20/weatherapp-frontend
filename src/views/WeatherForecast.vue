<template>
    <div class="forecast-container" v-show="this.user?.nickname">
        <p class="mb-5 text">{{ name }}</p>
        <a target="_blank" :href="githubLink" class="mb-5 text">{{ githubLink }}</a>
        <form @submit.prevent="submitForm" class="forecast-container">
            <Input inputType="text" v-model="search" class="mb-5" icon="magnifying-glass" />
            <p class="text-danger mb-5" v-show="hasError">{{ errorMessage }}</p>
            <Button :disabled="fetching" buttonType="submit" type="default" class="mb-5 btn">{{ buttonText }}</Button>
        </form>
        <div v-show="forecastData">
            <WeatherResult :keys="keys" :data="forecastData" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CommonMixins from '@/common/mixins/CommonMixins'
import WeatherForecastApi from '@/services/weatherforecast/api'
import WeatherResult from './WeatherResult.vue';

export default {
    mixins: [CommonMixins],
    components: {WeatherResult},
    data(){
        return {
            user: null,
            search: "",
            hasError: false,
            errorMessage: "",
            fetching: false,
            keys: [],
            forecastData: null,
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
            this.forecastData = null;
            this.fetching = true;
            let queryParams = this.setQueryParameter({search: this.search});
            const res = await WeatherForecastApi.getWeather(queryParams)
            
            if(res.status === 422 || res.data.forecast.status === "404"){
                this.hasError = true;
                this.errorMessage = res.status === 422 ? res.message : res.data.forecast.message
                this.fetching = false;
                
                return;
            }
            const forecast = res.data.forecast
            this.keys = [
                {
                    key: 'date',
                    label: 'Date'
                },
                {
                    key: 'temp',
                    label: "Temp(F)", 
                },
                {
                    key: 'description',
                    label: 'Description'
                },
                {
                    key: 'main',
                    label: 'Main'
                },
                {
                    key: 'pressure',
                    label: 'Pressure'
                },
                {
                    key: 'humidity',
                    label: 'Humidity'
                }
            ]

            this.forecastData=[
                {
                    date: this.getDateToday(),
                    temp: forecast.main.temp,
                    description: forecast.weather[0].description,
                    main: forecast.weather[0].main,
                    pressure: forecast.main.pressure,
                    humidity: forecast.main.humidity
                },
            ]
            this.fetching = false;
        },

        getDateToday(){
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            const formattedToday = dd + '/' + mm + '/' + yyyy;

            return formattedToday;
        }
    },

    beforeMount(){
        this.user = this.$auth0.user;
    },
}
</script>

<style scoped>
.forecast-container{
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