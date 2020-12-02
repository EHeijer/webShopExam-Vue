import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HandleOrders from '../views/HandleOrders.vue'
import Products from '../views/Products.vue'
import OrderHistory from '../views/OrderHistory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employee-actions/handle-orders',
    name: 'HandleOrders',
    component: HandleOrders
  },
  {
    path: '/employee-actions/order-history',
    name: 'OrderHistory',
    component: OrderHistory
  },
  {
    path: '/employee-actions/products',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
