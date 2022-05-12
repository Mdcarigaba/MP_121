<template>
    <div>
        <tool-bar/>
        <div class="card" id="holder">
          <div v-if="hidden">
          <input v-model="product_dets['Product Name']" placeholder="Product Name" id="input">
          <input v-model="product_dets['Price']" placeholder="Product Price" id="input" type="number">
          <input v-model="product_dets['Desc']" placeholder="Product Description" id="input" class="desc" maxlength="5000">
          <input v-model="product_dets['imgsrc']" placeholder="Product Image" id="input">
          <button class="cardbtn addcart" @click="hidden = !hidden; product_dets={}">Cancel</button>
          <button class="cardbtn addcart" @click="sell()">Add new Product</button>
          </div>
          <button class="cardbtn addcart" v-if="!hidden" @click="hidden = !hidden">Sell new Product</button>
        </div>
        <div class="card" id="report">
          <h3 id="product-name">Sales Report</h3>
          <p id="product-desc">Total sales: </p>
          <!--Get data for previous 5 sales-->
          <p id="product-desc">Recent Sales: </p>

        </div>
    </div>
</template>

<script>
    import ToolBar from '../components/ToolBar.vue'
    export default {
    components: { ToolBar },
    data(){
      return{
        hidden: false,
        product_dets: {},
      }
    },
    name: 'ProfilePage',
    methods:{
      sell(){
        console.info(this.product_dets)
      }
    }
}
</script>

<style>
  html{
    background-image: url('https://st4.depositphotos.com/26922174/31641/v/950/depositphotos_316419150-stock-illustration-social-media-doodle-seamless-pattern.jpg?forcejpeg=true');
    background-repeat: repeat;
  }
  .desc{
    height: 100px;
  }
  #input{
    margin: 5px;
    padding: 5px;
  }
  #holder{
    padding: 10px;
  }
</style>
