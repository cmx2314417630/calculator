import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "医学计算器",
    },
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue"),
    meta: {
      title: "未找到该页面",
    },
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index/index.vue"),
    children: [
      {
        path: "/BMI",
        name: "BMI",
        component: (resolve) => require(["@/views/index/BMI.vue"], resolve),
        meta: {
          title: "体重指数（BMI）",
        },
      },
      {
        path: "/BSA",
        name: "BSA",
        component: (resolve) => require(["@/views/index/BSA.vue"], resolve),
        meta: {
          title: "体表面积（BSA）",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
