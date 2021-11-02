import { createRouter, createWebHistory } from "vue-router";
import ProductsPage from "../views/ProductsPage";

const routes = [
  {
    path: "/",
    name: "Products Page",
    component: ProductsPage,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import("../views/Product"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.ROUTER_BASE_NAME),
  routes,
});

export default router;
