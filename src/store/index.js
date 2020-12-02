import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    orders : [],
    products: []
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = []
      payload.forEach(order => {
        state.orders.push(order);
      });
    },
    updateOrder(state,payload) {
      console.log(state)
      console.log(payload)
    },
    setProducts(state, payload) {
      state.products = []
      payload.forEach(product => {
        state.products.push(product);
      })
    },
    changeProductStatus(state,payload) {
      console.log(state)
      console.log(payload)
    },
    updateProduct(state,payload) {
      console.log(state)
      console.log(payload)
    },
    addProduct(state,payload) {
      console.log(state)
      console.log(payload)
    },
  },
  actions: {
    async loadOrders({commit}) {
      const response = await axios.get("http://localhost:8080/employee-actions/orders");
      commit('setOrders', response.data)
    },
    async changeOrderStatus({commit}, order) {
      console.log(order)
      const response = await axios.put(`http://localhost:8080/employee-actions/handle-orders/${order.id}`, {...order})
      commit('updateOrder', response.data)
    },
    async loadProducts({commit}) {
      const response = await axios.get("http://localhost:8080/employee-actions/products");
      commit("setProducts", response.data)
    },
    async changeProductStatusToRemoved({commit}, product) {
      const response = await axios.put(`http://localhost:8080/employee-actions/products/${product.id}`, {...product})
      commit('changeProductStatus', response.data)
    },
    async updateProduct({commit}, product) {
      const response = await axios.put(`http://localhost:8080/employee-actions/products/${product.id}`, {...product})
      commit('updateProduct', response.data)
    },
    async addProduct({commit}, product) {
      const response = await axios.post("http://localhost:8080/employee-actions/products", {...product})
      commit('addProduct', response.data)
    }
  },
  modules: {
  }
})
