<template>
  
       <div class="orders-container">
           <div class="underlying"></div>
       <div class="order-table">
            <header>
                <p>Orders To Be Handled</p>
            </header>
            <table class="table">
                <tr class="table-top">
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th>Customer ID</th>
                    <th>Order Status</th>
                    <th>Order Sum</th>
                    <th style="width:150px;">Actions</th>
                </tr>
                <tr class="table-row" v-for="(order, index) in getOrdersNotHandled" :key="index">
                    <td>{{order.id}}</td>
                    <td>{{order.dateCreated}}</td>
                    <td>{{order.user.id}}</td>
                    <td v-if="!order.orderSent">Waiting To Be Handled</td>
                    <td>{{order.totalOrderPrice}} KR</td>
                    <td style="width:150px;color:#000;">
                        <font-awesome-icon @click="showOrder(order.id)" icon="search-plus" class="icon"/>
                    </td>
                    <div class="order-modal" :id="order.id">
                        <header>    
                            <p>Order details</p>
                            <font-awesome-icon @click="hideOrder(order.id)" icon="times" class="icon"/>
                        </header>
                        <table class="orderlines-table">
                            <tr class="table-top">
                                <th></th>
                                <th>Product ID</th>
                                <th>Brand</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Shelf Number</th>
                            </tr>
                            <tbody>
                            <tr class="table-row" v-for="(orderline, index) in order.orderLines" :key="index">
                                <td><img style="width:90px;" :src="require('@/assets/' + orderline.product.imageUrl)" alt=""></td>
                                <td>{{orderline.product.id}}</td>
                                <td>{{orderline.product.brand}}</td>
                                <td>{{orderline.product.productName}}</td>
                                <td>{{orderline.quantity}}</td>
                                <td>{{orderline.product.shelfNumber}}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="table-bottom">
                            <p>Sum: {{order.totalOrderPrice}} KR</p>
                        </div>
                        <footer>
                            <button class="click-button" @click="handleOrder(order)">Handle Order</button>
                        </footer>
                        
                    </div>
                </tr>
            </table>
        </div>
       </div>
   
</template>

<script>
import { mapState } from "vuex"
   export default {
     data: () => ({
       
     }),

     methods: {
         showOrder(orderId) {
             document.querySelector('.underlying').style.display = 'block';
             document.getElementById(orderId).style.display = 'block';
             document.querySelector('body').style.overflowY = "hidden";
         },
         hideOrder(orderId) {
             document.querySelector('.underlying').style.display = 'none';
             document.getElementById(orderId).style.display = 'none';
             document.querySelector('body').style.overflowY = "visible";
         },
         handleOrder(order){
             order.orderSent = true;
             this.$store.dispatch("changeOrderStatus", order);
             this.hideOrder(order.id)
         }
     },
     computed: {
        ...mapState([
          'orders'
      ]),

        getOrdersNotHandled() {
            return this.orders.filter(order => !order.orderSent);
        }
      
    },
    mounted(){
      this.$store.dispatch('loadOrders')
    }
   }
</script>

<style lang="scss" scoped>
   .underlying{
    position: fixed;
    background: black;
    top:0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    opacity: 0.7;
    overflow-y: scroll;
    display: none;
}
.order-modal{
    position: fixed;
    background: #fff;
    top:50%;
    left: 50%;
    width: 80%;
    z-index: 2;
    transform: translate(-50%, -50%);
    display: none;
    border-radius: 3px;
    overflow:auto;
    max-height:600px;
    header {
        .icon {
        position: absolute;
        left: 97.5%;
        top: 6px;
        font-size: 25px;
        }
    }
    table {
        

        width:100%;
        border-collapse: collapse;
        color: #9b9a9a;
        tbody {
            
        }
    }
    .table-bottom {
                border-top: 2px solid #9b9a9a67;
                padding: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                p {
                    color:red;
                    font-weight: bold;
                }
            }
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        .click-button {
            margin: 1rem auto;
            border:none;
            background: #9b9a9a;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            width: 200px;
            padding: 1rem;
            border-radius: 3px;
        }
        .click-button:hover {
            background: #4d4b4b;
        }
    }
    
}
   .orders-container {
        
        max-width: 1538px;
        min-height: 100vh;
        margin: auto;
        padding: 150px 2rem 2rem 2rem;
        .order-table {
            box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
            width: 80%;
            margin: auto;
            overflow-y: scroll;
            max-height: 70vh;
            header {
                background: rgba(#000, 0.54);
                color: #fff;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                font-size: 22px;
                p{
                    margin: 0;
                }
            }
            .table {
                border-collapse: collapse;
                color: #9b9a9a;
                
                .table-top {
                   
                    color: #000;
                    
                    th {
                        padding: 1.4rem 1rem;
                        
                    }
                }
                width:100%;
                
                text-align: left;
                .table-row td{
                    border-top: 2px solid #9b9a9a67;
                    padding: 1rem;
                }
                .table-row td .icon {
                    margin: 0px 10px;
                    font-size: 20px;
                }
            }
            

        }
   }
</style>