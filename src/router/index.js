import Vue from 'vue'
import VueRouter from 'vue-router'
import OtherLayout from "../layout/other/OtherLayout";
import HeaderLayout from "../layout/index/HeaderLayout";
import Detail from "../views/Course/Detail";
import Shopping from "../views/Course/Shopping";
import Play from "../views/Course/Play";
import Index from "../views/Index/Index";


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/index',
    component:HeaderLayout,
    children:[{
      path:"",
      component:Index,
    },
    ]
  },{
    path:"/other/:id",
    component: OtherLayout,
    children: [
      {
        path: '',
        component: Detail
      },
      {
        path:'/play/:courseId',
        component: Play
      },
      {
        path: '/shop',
        component: Shopping
      }
    ]
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//  Luyoude前置守卫
// router.beforeEach((to,from,next)=>{
//   next()
//   next()
//   next()
// })
export default router
