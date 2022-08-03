import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';

import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import router from './router';

createApp({
    components : {
        //Dashboard,
        Navigation
        
    }
}).use(router).mount('#app')