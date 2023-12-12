import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ProductView from "../views/ProductView.vue"
import ContactUs from "../views/ContactUs.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
        path:"/about",
        name:"about",
        component:AboutView
    },

    {
        path:"/ProductList",
        name:"Product",
        component:ProductView
    },

    {
        path:"/Contact",
        name:"Contact",
        component:ContactUs
    },
 
  ]
})

export default router
