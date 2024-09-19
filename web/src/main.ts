import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// @ts-ignore
import { createThemeManager } from 'vue-daisyui-theme-manager';

const app = createApp(App);

// Mount the app
app.mount('#app');
