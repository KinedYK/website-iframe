import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Layout from "@/components/Layout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      // beforeEnter:(to,from) =>{
      //     //to是当用户点击进入当前页面的时候,我们可以进行一些拦截设置
      //     //from当来自其他页面进入当前页面的时候，我们也可以进行拦截提示用户
      //     alert('我是路由独享守卫！！！')
      // },
      // beforeRouteLeave(to, from, next) {
      //   // 导航离开该组件的对应路由时调用
      //   // 可以访问组件实例 `this`
      //   alert('我是路由独享守卫！！！')
      // },
      children: [
        {
          path: "",
          name: "index",
          component: () => import("@/view/index/Index.vue"),
        },
        // {
        //   path: "list/:type",
        //   name: "list",
        //   component: () => import("@/view/list/List.vue"),
        // },
        // {
        //   path: "soft/detail_:id.html",
        //   name: "detail",
        //   component: () => import("@/view/detail/Detail.vue"),
        // },
      ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

export default router;
