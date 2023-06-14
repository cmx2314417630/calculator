import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
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
