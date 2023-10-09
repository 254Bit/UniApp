import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/LandingPage.vue"
import AboutUs from "./../components/AboutUs.vue"
import Register from "./../components/Register.vue"
import LogIn from "./../components/LogIn.vue"
import Students from "./../components/Students.vue"

const routes = [
    {
        path:'/',
        name:'landingpage',
        component: LandingPage,
    },
    {
        path:'/AboutUs',
        name:'aboutus',
        component: AboutUs,
    },
    {
        path:'/Register',
        name:'register',
        component: Register,
    },
    {
        path:'/LogIn',
        name:'login',
        component: LogIn,
    },
    {
        path:'/Students',
        name:'Students',
        component: Students,
    }
    
]
const router = createRouter({
    history: createWebHistory(), // keeps history
    routes,
})

export default router // able to use it in other links opposite of import