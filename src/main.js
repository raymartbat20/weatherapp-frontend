import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';
import './assets/main.css'

import Button from './components/general/Button.vue';
import Input from './components/general/Input.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);
const app = createApp(App)

// app.use(router)
app.component('Button',Button);
app.component('Input',Input);
app.component('FontAwesomeIcon', FontAwesomeIcon)
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
