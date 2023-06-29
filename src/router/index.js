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
      {
        path: "/xtKTV",
        name: "xtKTV",
        component: (resolve) => require(["@/views/index/xtKTV.vue"], resolve),
        meta: {
          title: "血透Kt/V（经典法）",
        },
      },
      {
        path: "/nPNA-tq",
        name: "nPNA-tq",
        component: (resolve) => require(["@/views/index/nPNA-tq.vue"], resolve),
        meta: {
          title: "nPNA-透析前",
        },
      },
      {
        path: "/ftKTV",
        name: "ftKTV",
        component: (resolve) => require(["@/views/index/ftKTV"], resolve),
        meta: {
          title: "腹透-Kt/V",
        },
      },
      {
        path: "/ftCcr",
        name: "ftCcr",
        component: (resolve) => require(["@/views/index/ftCcr"], resolve),
        meta: {
          title: "腹透Ccr",
        },
      },
      {
        path: "/nPNA",
        name: "nPNA",
        component: (resolve) => require(["@/views/index/nPNA-ft"], resolve),
        meta: {
          title: "nPNA-腹膜透析",
        },
      },
      {
        path: "/csnsqcl",
        name: "csnsqcl",
        component: (resolve) => require(["@/views/index/csnsqcl"], resolve),
        meta: {
          title: "残肾尿素清除率",
        },
      },
      {
        path: "/RFI",
        name: "RFI",
        component: (resolve) => require(["@/views/index/RFI"], resolve),
        meta: {
          title: "肾衰指数（RFI）",
        },
      },
      {
        path: "/lgnpxfs",
        name: "lgnpxfs",
        component: (resolve) => require(["@/views/index/lgnpxfs"], resolve),
        meta: {
          title: "滤过钠排泄分数",
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
