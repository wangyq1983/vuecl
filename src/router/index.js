import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Error from '@/components/Error'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Sbgl from '@/components/Sbgl'
import HomeSbgl from '@/components/sbgl/Home'
import DwglSbgl from '@/components/sbgl/Dwgl'
import HyclbSbgl from '@/components/sbgl/Hyclb'
import ShglSbgl from '@/components/sbgl/Shgl'
import YshglSbgl from '@/components/sbgl/Yshgl'
import Tjfx from '@/components/Tjfx'
import SysManage from '@/components/SysManage'
import OperManage from '@/components/OperManage'
import Detail from '@/components/Detail'
import Count from '@/components/Count'


import * as Util from '../util'
Vue.use(Router);

var router = new Router({
  mode: "history",
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/sbgl/home',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/sbgl/detail',
      name: 'Detail',
      component: Detail,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/sbgl',
      name: 'Sbgl',
      component: Sbgl,
      meta: {
        requiresAuth: true
      },
      redirect: '/sbgl/home',
      // beforeEnter: (to, from, next) => {
      //   console.log('我进入了params模板');
      //   console.log(to);
      //   console.log(from);
      //   next();
      // },
      children: [{
          path: 'home',
          name: 'Home',
          meta: {
            requiresAuth: true
          },
          component: HomeSbgl
        },
        {
          path: 'dwgl',
          name: 'Dwgl',
          meta: {
            requiresAuth: true,
            keepAlive: true
          },
          component: DwglSbgl
        },
        {
          path: 'hyclb',
          name: 'Hyclb',
          meta: {
            requiresAuth: true
          },
          component: HyclbSbgl
        },
        {
          path: 'shgl',
          name: 'Shgl',
          meta: {
            requiresAuth: true
          },
          component: ShglSbgl
        },
        {
          path: 'yshgl',
          name: 'Yshgl',
          meta: {
            requiresAuth: true
          },
          component: YshglSbgl
        },
      ]
    },
    {
      path: '/tjfx',
      name: 'Tjfx',
      component: Tjfx,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/sysmanage',
      name: 'SysManage',
      component: SysManage,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/opermanage',
      name: 'OperManage',
      component: OperManage,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/hi',
      component: Hi,
      meta: {
        requiresAuth: true
      },
      children: [{
          path: 'hi1',
          name: 'Hi1',
          component: Hi1
        },
        {
          path: 'hi2',
          name: 'Hi2',
          component: Hi2
        },
      ]
    },
    {
      path: '*',
      component: Error
    }
  ]
});

router.beforeEach((to, form, next) => {
  //使用路由里面的title替换为动态的title
  //console.log(to);
  //console.log(to.meta.requiresAuth);
  window.document.title = to.meta.title || '黑烟车';
  if (to.meta.requiresAuth == true) { //需要登陆权限进入的路由
    if (Util.getCookie('token') == null || Util.getCookie('token') == 'null' || !Util.getCookie('token')) { //取不到登陆信息
      router.push({
        path: "/login",
        querry: {
          redirect: router.currentRoute.fullPath
        } //从哪个页面跳转
      })
    } else { //取得到登陆信息，进行下一步
      next();
    }
  } else { //不需要登陆权限
    next()
  }
});

export default router;
