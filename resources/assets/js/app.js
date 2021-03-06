require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

import Clients from './components/clients/Clients.vue'
import Calendar from './components/calendar/Calendar.vue'
import Employees from './components/employees/Employees.vue'
import Users from './components/users/Users.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    { path: '/clients', component: Clients },
    { path: '/calendar', component: Calendar },
    { path: '/employees', component: Employees },
    { path: '/users', component: Users }
]

const router = new VueRouter({
    mode: 'history',
    routes, // сокращённая запись для `routes: routes`
    /*hashbang: false,
    history: true,
    linkActiveClass: "active"*/
})

const app = new Vue({
    el: '#app',
    router
});
