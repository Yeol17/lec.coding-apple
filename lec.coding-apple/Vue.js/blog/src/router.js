import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail";
import Author from "./components/Author";
import Comment from "./components/Comment";
import ErrPage from "./components/Err";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author.vue,
      },
      {
        path: "comment",
        component: Comment.vue,
      },
    ],
  },
  {
    path: "/asdasd",
    component: ErrPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
