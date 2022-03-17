import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home-view",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/product",
    name: "product-view",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/news",
    name: "news-view",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/about",
    name: "about-view",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact-view",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
