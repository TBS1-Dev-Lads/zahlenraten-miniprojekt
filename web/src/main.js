import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// @ts-ignore
import { createThemeManager } from 'vue-daisyui-theme-manager';
const app = createApp(App);
// Initialize theme manager with light, dark, and default themes
app.use(createThemeManager({
    light: 'cupcake', // Set light theme
    dark: 'night', // Set dark theme
    watchSystemTheme: true, // Watch system theme to toggle between light and dark
}));
// Mount the app
app.mount('#app');
//# sourceMappingURL=main.js.map