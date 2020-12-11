<template>
   <div class="form-container">
       <div class="underlying"></div>
       <LoginForm/>
   </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
   export default {
    components: {
        LoginForm
    },
     data: () => ({
       
     })
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
    z-index: 3;
    opacity: 0.7;
    overflow-y: scroll;
    display: block;
    }
</style>