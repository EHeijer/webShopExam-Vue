import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HandleOrders from '../views/HandleOrders.vue'
import Products from '../views/Products.vue'
import OrderHistory from '../views/OrderHistory.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

// function findAllPaths() {
//   let routePaths = []
//   this.routes.forEach(route => {
//     routePaths.push(route.path)
//   });
//   return routePaths;
// }

function guardRoutes(to, from, next) {
  if(to.path !== 'api/login' && !localStorage.getItem('currentUser')){
    next('/api/login')
  }else if(localStorage.getItem('currentUser')){
    next();
  }
}

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: guardRoutes
  },
  {
    path: '/api/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/api/employee-actions/handle-orders',
    name: 'HandleOrders',
    component: HandleOrders,
    beforeEnter: guardRoutes
  },
  {
    path: '/api/employee-actions/order-history',
    name: 'OrderHistory',
    component: OrderHistory,
    beforeEnter: guardRoutes
  },
  {
    path: '/api/employee-actions/products',
    name: 'Products',
    component: Products,
    beforeEnter: guardRoutes
  },
  {
    path :'*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
//  router.beforeEach((to,from, next) => {
//   if(to.path !== '/api/login' && !localStorage.getItem('currentUser')){
//     next('/api/login')
//   }else if(localStorage.getItem('currentUser')){
//     next();
//   }
//  })
export default router
