//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './routes'
// vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// Icons
import {aliases, mdi} from "vuetify/lib/iconsets/mdi"; // mdi focuses on icons like phone, log in, user etc
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    icons:{
        defaultSet: "mdi",
        aliases,
        sets:{
            mdi
        }},
    components,
    directives,
})
// First creates an application, then i want to use veutify as my styling, then mount it to the index.html
createApp(App).use(vuetify).use(router).mount('#app') 
