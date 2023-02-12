import axios from 'axios'

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;
export default {
    /**
     * Fetch weather data information via city'
     * 
     * @param {String} search 
     */
    async getWeather(search){
        return await axios.get(`${BACKEND_API}/get-weather?${search}`)
        .then(res => {
            return res
        })
        .catch(err => {
            return {
                status: 422,
                message: err.response.data.message
            }
        })
    }
}