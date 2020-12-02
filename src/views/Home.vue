<template>
  <div class="home">
    <div class="actions-container">
      <router-link to="employee-actions/handle-orders" class="function">
        <font-awesome-icon icon="tasks" class="icon"/>
        <h2>HANDLE ORDERS</h2>
      </router-link>
      <router-link to="employee-actions/order-history" class="function">
        <font-awesome-icon icon="history" class="icon"/>
        <h2>ORDER HISTORY</h2>
      </router-link>
      <router-link to="employee-actions/products" class="function">
        <font-awesome-icon icon="tshirt" class="icon"/>
        <h2>PRODUCTS</h2>
      </router-link>

    </div>
    
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
  .home {
    min-height: 100vh;
    display: flex; 
    justify-content: center;
    align-items: center;
    .actions-container {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: space-evenly;
      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.54);
        .icon {
          font-size: 150px;
          margin-bottom: 0.7rem;
        }
      }
      a:hover {
        color: rgba(70, 70, 70, 0.438);
      }
    }
  }
</style>