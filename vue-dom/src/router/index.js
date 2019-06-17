import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router=new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:()=>import('../views/elhome.vue'),
      meta: {
        title:"加班/休假"
      }
    },
    {
      path: '/order',
      component:()=>import('../views/elorder')
    },
    {
      path: '/commit/:type',
      component:()=>import('../views/commit.vue'),
      meta:{
        title:"提交"
      },
      props:true
    },
    {
      path: '/login',
      component:()=>import('../views/login'),
      meta: {
        title:"加班"
      },
    },
    {
      path: '/detail/:type/:id',
      component:()=>import('../views/detailViews.vue'),
      meta: {
        title:"申请表"
      },
      props:true
    },
  ]
})
export default router
