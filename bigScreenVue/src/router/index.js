import { createRouter, createWebHistory } from "vue-router";
import PowerView from "@/views/PowerView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "powerview",
      component: PowerView,
    },
  ],
});

export default router;
