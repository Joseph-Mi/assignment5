import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Purchase from "../views/Purchase.vue";
import Cart from "../views/Cart.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/purchase",
      component: Purchase,
    },
    {
      path: "/cart",
      component: Cart,
    },
  ],
});
