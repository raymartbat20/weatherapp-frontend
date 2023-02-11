import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';

import './assets/main.css'

const app = createApp(App)

// app.use(router)
app.use(
    createAuth0({
        domain: "dev-fo5konvpkt4e4gxk.us.auth0.com",
        clientId: "SPtsnzY8HRxTj7PvXyJpPJ6hyvQXsa5X",
        authorizationParams: {
        redirect_uri: window.location.origin
        }
    })
);

app.mount('#app')
