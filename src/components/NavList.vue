<template>
   <ul  class="product-list">
        <li><router-link @click.native="closeNav" to="/">Home</router-link></li>
        <li><router-link @click.native="closeNav" to="/api/employee-actions/handle-orders">Handle Orders</router-link></li>
        <li><router-link @click.native="closeNav" to="/api/employee-actions/order-history">Order History</router-link></li>
        <li><router-link @click.native="closeNav" to="/api/employee-actions/products">Products</router-link></li>
    </ul>
</template>

<script>
   export default {
       props: {
           open: Boolean
       },
     data: () => ({
       
     }),
     methods: {
         closeNav() {
             this.$emit("closeNav",this.open)
         }
     },
     computed: {
         getOpen(){
             let getOpen = this.open;
             return getOpen;
         }
     }

   }
</script>

<style lang="scss" scoped>
   .product-list {
        position: fixed;
        background: black;
        top:81.78px;
        left: 0;
        height: 100vh;
        width: 100vw;  
        opacity: 0.95;        
        padding: 2rem 1rem 2rem 1rem;
        li {
            padding: 1rem 0;
            // border-bottom: solid 2px rgba(255, 255, 255, 0.13);
            // width: 80%;
            // margin: auto;
            list-style: none;
            a{
                color: #fff;
                text-decoration: none;
                font-size: 30px;
                
                
            }
            a:hover {
                color: rgba(255, 255, 255, 0.116);
            }
        }
        
    }
</style>