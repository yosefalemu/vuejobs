import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditView from "@/views/EditView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/jobs/add",
      name: "addJob",
      component: AddJobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "editJob",
      component: EditView,
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
