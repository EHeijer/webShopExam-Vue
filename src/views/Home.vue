<template>
  <div class="home">
    <NavList @closeNav="closeNav" :open="open" v-if="open"/>
    <font-awesome-icon @click="logout" icon="sign-out-alt" class="icon sign-out"/>
    <div class="actions-container">
      <router-link to="api/employee-actions/handle-orders" class="function">
        <font-awesome-icon icon="tasks" class="icon"/>
        <h2>HANDLE ORDERS</h2>
      </router-link>
      <router-link to="api/employee-actions/order-history" class="function">
        <font-awesome-icon icon="history" class="icon"/>
        <h2>ORDER HISTORY</h2>
      </router-link>
      <router-link to="api/employee-actions/products" class="function">
        <font-awesome-icon icon="tshirt" class="icon"/>
        <h2>PRODUCTS</h2>
      </router-link>

    </div>
    
  </div>
</template>

<script>
import NavList from '../components/NavList'

export default {
  components: {
    NavList
  },
   data: () => ({
       open: false
    }),
  methods: {
    logout() {
      localStorage.removeItem('currentUser');
      this.$router.push('/api/login')
    },
    openNav() {
             this.open = true
             document.querySelector('body').style.overflowY = "hidden"
         },
         closeNav() {
             this.open = false
             document.querySelector('body').style.overflowY = "visible"
         }
  },
}
</script>
<style lang="scss" scoped>
  .home {
    min-height: 100vh;
    display: flex; 
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    .sign-out {
      position: absolute;
      left: 96%;
      top:120px;
      font-size: 50px;
      color:#000;
      cursor: pointer;
    }
    .sign-out:hover {
      opacity:0.5;
    }
    .actions-container {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: space-evenly;
      a {
        text-decoration: none;
        color: #007bff;
        opacity:0.9;
        
        .icon {
          font-size: 150px;
          margin-bottom: 0.7rem;
        }
      }
      a:hover {
        opacity:0.5;
      }
    }
  }
</style>