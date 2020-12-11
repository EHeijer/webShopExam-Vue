import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    orders : [],
    products: [],
    currentUser: {
      username: '',
      password: '',
      email: '',
      role: [],
      token: ''
    },
    loggedIn: Boolean
  },
  mutations: {
    initialiseStore(state) {
      if(localStorage.getItem('currentUser')){
        let userJson = localStorage.getItem('currentUser');
        let user = JSON.parse(userJson);
        state.currentUser.username = user.username;
        state.currentUser.email = user.email;
        state.currentUser.role = user.roles;
        state.currentUser.token = user.token;

        state.loggedIn = true;
      }else {
        state.loggedIn = false;
        
      }
      
    },
  
    loginUser(state, user) {
      state.currentUser.username = user.username;
      state.currentUser.password = user.password;
      state.currentUser.email = user.email;
      state.currentUser.role = user.roles;
      state.currentUser.token = user.token;

      state.loggedIn = true;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
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
    
    async login({commit}, user){
      
      const response = await axios.post('http://localhost:8080/api/login/', {...user});
    
      commit('loginUser', response.data)
    
    },
    async loadOrders({commit}) {
      const response = await axios.get("http://localhost:8080/api/employee-actions/orders", { headers: {"Authorization" : `Bearer ${this.state.currentUser.token}`}});
      commit('setOrders', response.data)
    },
    async changeOrderStatus({commit}, order) {
      console.log(order)
      const response = await axios.put(`http://localhost:8080/api/employee-actions/handle-orders/${order.id}`, {...order}, { headers: {"Authorization" : `Bearer ${this.state.currentUser.token}`}})
      commit('updateOrder', response.data)
    },
    async loadProducts({commit}) {
      const response = await axios.get("http://localhost:8080/api/employee-actions/products", { headers: {"Authorization" : `Bearer ${this.state.currentUser.token}`}});
      commit("setProducts", response.data)
    },
    async changeProductStatusToRemoved({commit}, product) {
      const response = await axios.put(`http://localhost:8080/api/employee-actions/products/${product.id}`, {...product}, { headers: {"Authorization" : `Bearer ${this.state.currentUser.token}`}})
      commit('changeProductStatus', response.data)
    },
    async updateProduct({commit}, product) {
      const response = await axios.put(`http://localhost:8080/api/employee-actions/products/${product.id}`, {...product}, { headers: {"Authorization" : `Bearer ${this.state.currentUser.token}`}})
      commit('updateProduct', response.data)
    },
    async addProduct({commit}, product) {
      const response = await axios.post("http://localhost:8080/api/employee-actions/products", {...product}, { headers: {"Authorization" : `Bearer ${this.state.currentUser.token}`}})
      commit('addProduct', response.data)
    }
  },
  modules: {
  }
})
