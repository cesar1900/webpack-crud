import Vue from 'vue'
import Router from 'vue-router'
 
import paciente from '@/components/paciente'
import inicio from '@/components/inicio'
import nuevo_usuario from '@/components/nuevo_usuario'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },
     {
      path: '/paciente',
      name: 'paciente',
      component: paciente
    },
    {
      path: '/nuevo_usuario',
      name: 'nuevo_usuario',
      component: nuevo_usuario
    }
  ]
})
