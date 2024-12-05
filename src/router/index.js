import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Portfolio from "@/views/Portfolio.vue";
import Movie from "@/views/Movie.vue";

const routes = [
  { path:'/', name:'HOME', component:Home },
  { path:'/about', name:'ABOUT',component:About },
  { path:'/portfolio', name:'Portfolio',component:Portfolio },
  { path:'/movie', name:'MOVIE',component:Movie },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
})

export default router