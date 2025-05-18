import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext'

import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Aura
    }
});
app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Drawer', Drawer)
app.component('Menu', Menu)
app.component('IconField', IconField)
app.component('InputIcon', InputIcon)
app.component('InputText', InputText)
app.use(ToastService)
app.use(router).mount('#app')
