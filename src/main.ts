import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

router.beforeEach((to) => {
    document.title = `${(to.meta.title as string)} | EduardoProfe666🎩`  || 'Vue';
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
