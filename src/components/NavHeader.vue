<template>
   <header>
        <div class="header-container">
            <router-link to="/" class="title"><h1>Employee Service</h1></router-link>
            
            <ul v-if="open" class="product-list">
                <li><router-link @click.native="closeNav" to="/">Home</router-link></li>
                <li><router-link @click.native="closeNav" to="/employee-actions/handle-orders">Handle Orders</router-link></li>
                <li><router-link @click.native="closeNav" to="/employee-actions/order-history">Order History</router-link></li>
                <li><router-link @click.native="closeNav" to="/employee-actions/products">Products</router-link></li>
            </ul>
            <div class="bars">
                <font-awesome-icon v-if="!open" @click="openNav" icon="bars" class="icon" />
                <font-awesome-icon v-if="open" @click="closeNav" icon="times" class="icon" />
            </div>
        </div>
    </header>
</template>

<script>
   export default {
     data: () => ({
       open: false
     }),
     methods: {
         openNav() {
             this.open = true
             document.querySelector('body').style.overflowY = "hidden"
         },
         closeNav() {
             this.open = false
             document.querySelector('body').style.overflowY = "visible"
         }
     }
   }
</script>

<style lang="scss" scoped>
   header {
       position: fixed;
        background: rgb(165, 165, 165);
        padding: 1.4rem;
        width: 100vw;
        .header-container{
            display: flex;
            .title{
                text-decoration: none;
                
                h1 {
                color: #fff;
                font-weight: 300;
                }
            }
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
            .bars {
                .icon {
                    color: #fff;
                    font-size: 40px;
                    position: absolute;
                    left: 94%;
                    cursor: pointer;
                }
                .icon:hover {
                    color: #000;
                }
            }
        }
    }
</style>