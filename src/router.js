import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/Home'
import About from '@/views/About'
import ErrorPlatzi from '@/views/ErrorPlatzi'
import CoinDetalil from '@/views/CoinDetalil'



Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/about',
            name:'about',
            component:About
        },
        {
            path:'/coin/:id',
            name:'coin-detail',
            component:CoinDetalil
        },
        {
            path:'*',
            name:'error',
            component:ErrorPlatzi
        },
]
})