import { createApp } from 'vue'
import { Notify, Quasar } from 'quasar'
import App from './App.vue'
import { router } from './routes/routes.js'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './style.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: [Notify]
})

app.use(router)

app.mount('#app')