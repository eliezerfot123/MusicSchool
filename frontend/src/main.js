import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import './style.css'
import App from './App.vue'
import Home from './components/HomePage.vue'
import Register from './components/Register.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')
