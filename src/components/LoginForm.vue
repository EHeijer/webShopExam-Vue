<template>
   <div class="login-form">
        <h2>Sign In</h2>
        <form name="form" @submit.prevent="login">
        <div class="input-name">
            <input type="text" placeholder="Username" v-model="user.username" name="username">
            <!-- <div class="alert alert-danger" v-if="errors.has('username')" role="alert">Username is required</div> -->
        </div>
        <div class="input-password">
            <input type="password"  placeholder="Password" v-model="user.password" name="password">
            <!-- <div class="alert alert-danger" v-if="errors.has('password')" role="alert">Password is required</div> -->
        </div>
        <div class="button-container">
            <button class="click-button">Login</button>
        </div>
        
        <!-- <div class="alert alert-danger" v-if="message" role="alert">{{message}}</div> -->
        </form>
        <div v-if="message" style="padding:1rem 0 0 0;"><p style="color:red; font-weight:bold; " >{{message}}</p></div>
         
    </div>
</template>

<script>
   export default {
     data: () => ({
       user: {
           username: '',
           password: ''
       },
       message: ''
     }),

     methods: {
        closeLogin() {
        //    this.$store.state.login = false;
        //    document.querySelector('body').style.overflowY = "visible";
        },
        toRegister() {
        //    this.$store.state.login = false;
        //    this.$store.state.register = true;
        },
        login() {
            this.$store.dispatch('login', this.user).then( () => this.$router.push('/')).catch(error => {
                console.log(error.response.data)
                this.message = error.response.data
            })
            
        }
     },
    //  computed: {
    //     loggedIn() {
    //        return this.$store.state.auth.status.loggedIn;
    //     }
    //  },
    //  created() {
    //     if(this.loggedIn) {
    //        this.$router.push('/products');
    //     }
    //  }
   }
</script>

<style lang="scss" scoped>
   hr {
border: 0;
height: 0;
border-top: 1px solid #5a5959;
width: 90%;
margin: auto;
padding: 0.5rem 0;
}
.login-form {
   position: fixed;
   top:50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 4;
   background: #fff;
   padding: 2rem 2rem;
   border: solid 3px #007bff;
   width: 450px;
   height: 280px;
   border-radius: 10px;
   color: #007bff;
   .close {
      img {
         width: 15px;
         position: absolute;
         left: 96%;
         top: 2%;
      }
   }
   h2 {
      
   }
   .input-name {
      input {
         width: 350px;
         padding: 1rem 1rem;
         border: solid 2px grey;
         border-radius: 5px;
         color: black;
         font-weight: bold;
         font-size: 18px;
      }
      margin: 1rem 0;
   }
   .input-password {
      input{
         width: 350px;
         padding: 1rem 1rem;
         border: solid 2px grey;
         border-radius: 5px;
         color: black;
         font-weight: bold;
         font-size: 18px;
      } 
      margin: 1rem 0;
   }
   .button-container {
       
       display: flex;
       justify-content: center;
       align-items: center;
    .click-button {
      
      width: 386px;
      border-style: none;
      border-radius: 5px;
      padding: 1rem;
      font-weight: bold;
      font-size: 18px;
      background: #007bff;
      color: #fff;
      cursor: pointer;
    }
    .click-button:hover {
        background: #007bffc7;
        
    }
   }
   
   .form-bottom {
      padding: 1rem 0;
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .checkbox {
         label {
            font-size: 14px;
            font-weight: bold;
            margin-left: 3px;
         }
      }
      .forgot-password {
         a {
            text-decoration: none;
            color: #000;
            font-size: 14px;
            font-weight: bold;
         }
      }
   }
   .register {
      display: flex;
      justify-content: center;
      p{
         padding-right: 4px;
         font-size: 14px;
         font-weight: bold;
      }
      a {
         padding-left: 4px;
         text-decoration: none;
         
         button {
            border-style: none;
            background: inherit;
            color: #000;
            font-size: 14px;
            font-weight: bold;
         }
      }
   }
}
</style>