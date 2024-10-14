import { createApp } from 'vue'
import MainContent from './MainContent.vue'
import router from './router'; 

createApp(MainContent).use(router).mount('#app')
