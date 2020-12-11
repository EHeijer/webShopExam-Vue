<template>
   <div class="new-product-form">
        <header>
            <h3>Product Form</h3>
            <font-awesome-icon @click="hideProductForm" icon="times" class="icon"/>
        </header>
        <form id="form" class="inputs" v-on:submit="addProduct()">
            <!-- <input placeholder="Image" v-model="newProduct.imageUrl"> -->
            <input placeholder="Brand" v-model="newProduct.brand">
            <input placeholder="Product Name" v-model="newProduct.productName">
            <input placeholder="Price" v-model="newProduct.price">
            <input placeholder="Shelf Number" v-model="newProduct.shelfNumber">
            <select id="select" v-model="newProduct.category">
                <option value="">Choose Category</option>
                <option value="SUPPLEMENT">Supplement</option>
                <option value="CLOTHES">Clothes</option>
                <option value="TRAINING_SHOES">Shoes</option>
            </select>
            <select v-model="newProduct.imageUrl" id="image">
                <option value="">Choose Image</option>
                <option v-for="(image, index) in images" :key="index" :value="image.substring(2)">{{image.substring(2)}}</option>
            </select>
            <button type="submit" class="click-button">Save Product</button>
        </form>
    </div>
</template>

<script>
import { mapState } from "vuex"
   export default {
    props: {
        newProduct: Object
    },
     data: () => ({
       images: []
     }),
     methods: {
         addProduct() {
            event.preventDefault();
            this.$store.dispatch("addProduct", this.newProduct).then(() => this.$store.dispatch('loadProducts'));
            event.target.reset()
            this.hideProductForm();
         },
         hideProductForm() {
             document.querySelector('.underlying').style.display = 'none';
              document.querySelector('.new-product-form').style.display = 'none';
             document.querySelector('body').style.overflowY = "visible";
        },
        updateImg(value) {
            this.newProduct.imageUrl = value;
        },
        importAll(r) {
            r.keys().forEach(key => this.images.push(key));
        }
     },
     computed: {
        ...mapState([
          'products'
      ]),
      getProducts() {
          return this.$store.state.products;
      }
    },
    mounted(){
      this.$store.dispatch('loadProducts')
      this.importAll(require.context('../assets', true, /\.png$/));
    }
   }
</script>

<style lang="scss" scoped>
   .new-product-form{
    position: fixed;
    background: #fff;
    top:50%;
    left: 50%;
    width: 500px;
    z-index: 2;
    transform: translate(-50%, -50%);
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    height:600px;
    padding: 0rem 1rem;
    header {
        width: 100%;
        background: #00000050;
        text-align: left;
        padding: 1rem;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        .icon {
        position: absolute;
        left: 96%;
        top: 7px;
        font-size: 20px;
        }
    }
    .inputs {
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        input {
            width: 80%;
            padding: 0.7rem 0.3rem;
            color: #000;
            margin-bottom: 20px;
            border-radius: 3px;
            border: solid 2px rgba(0, 0, 0, 0.54);
            font-size: 16px;
        }
        #select {
            width: 83%;
            padding: 0.7rem 0.3rem;
            color: #000;
            margin-bottom: 20px;
            border-radius: 3px;
            border: solid 2px rgba(0, 0, 0, 0.54);
            font-size: 16px;
        }
        #image {
            width: 83%;
            padding: 0.7rem 0.3rem;
            color: #000;
            margin-bottom: 20px;
            border-radius: 3px;
            border: solid 2px rgba(0, 0, 0, 0.54);
            font-size: 16px;
        }
    }
    .click-button {
            margin: 1.5rem auto;
            border:none;
            background: #00000050;
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
</style>