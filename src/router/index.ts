import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Proyectos de Ejemplo'
      }
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/CounterView.vue'),
      meta: {
        title: 'Contador'
      }
    },
    {
      path: '/country-list',
      name: 'country-list',
      component: () => import('../views/CountryListView.vue'),
      meta: {
        title: 'Listado de Paises'
      }
    },
    {
      path: '/teacher-form',
      name: 'teacher-form',
      component: () => import('../views/TeacherFormView.vue'),
      meta: {
        title: 'Formulario de Profesores'
      }
    },
    {
      path: '/todo-list',
      name: 'todo-list',
      component: () => import('../views/ToDoListView.vue'),
      meta: {
        title: 'Lista de Tareas'
      }
    },
    {
      path: '/post-list',
      name: 'post-list',
      component: () => import('../views/PostListView.vue'),
      meta: {
        title: 'Lista de Posts'
      }
    },
    {
      path: '/phrases',
      name: 'phrases',
      component: () => import('../views/PhraseShowerView.vue'),
      meta: {
        title: 'Frases'
      }
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '404'
      }
    }
  ]
})

export default router
