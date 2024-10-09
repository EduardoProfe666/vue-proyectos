import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

router.beforeEach((to) => {
    document.title = to.meta.title || 'Vue';
});

app.use(createPinia())
app.use(router)

app.mount('#app')
