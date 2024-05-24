import { createApp } from 'vue'
import './style.css'
// import './output.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ListaLibros from "./components/ListaLibros.vue";
import Home from "./components/Home.vue";
import crud from "./components/Crud.vue";


const routes = [
    {path:'/',component: Home},
    {path: '/list', component: ListaLibros},
    {path: '/crud', component: crud}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})


const app = createApp(App);
app.use(router);
app.mount('#app');
