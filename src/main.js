import { createApp } from 'vue'
import App from './App.vue'
import './assets/index-js/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faStarRegular, faStarSolid)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
