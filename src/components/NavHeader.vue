<template>
   <header>
        <div class="header-container">
            <router-link to="/" class="title"><h1>Employee Service</h1></router-link>
            
            <NavList @closeNav="closeNav" :open="open" v-if="open"/>
            <div class="bars">
                <font-awesome-icon v-if="!open" @click="openNav" icon="bars" class="icon" />
                <font-awesome-icon v-if="open" @click="closeNav" icon="times" class="icon" />
            </div>
        </div>
    </header>
</template>

<script>
import NavList from './NavList'
   export default {
       components: {
           NavList
       },
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
        background: #007bff;
        padding: 1.4rem;
        width: 100vw;
        z-index: 2;
        .header-container{
            display: flex;
            .title{
                text-decoration: none;
                
                h1 {
                color: #fff;
                font-weight: 300;
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