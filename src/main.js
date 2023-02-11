import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';
import './assets/main.css'

import Button from './components/general/Button.vue';

const app = createApp(App)

// app.use(router)
app.component('Button',Button);
app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
        redirect_uri: window.location.origin
        }
    })
);

app.mount('#app')
