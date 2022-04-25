<template>
  
  <div>
    <tool-bar/>
    <br>
    <div class='row'>
    <div class='column' v-for="product in productList" :key="product.name">
      <product-card :item="product"/>
    </div>
    </div>
    
  </div>
    


</template>

<script>
import ProductCard from './components/ProductCard.vue'
import ToolBar from './components/ToolBar.vue'
export default {
  name: 'App',
  components: {
    ProductCard,
    ToolBar
  },
  data(){
    return{
      productList:[
        {name: 'Loid Forger', price: 25000, desc: 'Spy', imgLink:'https://64.media.tumblr.com/63d94ca70fc9b5af72954b4cb56c9d1a/2eb10c294b3dc87e-a0/s540x810/c7ce155794e6fb5ee951ef2a890abc2d069f4455.pnj'},
        {name: 'Yor Forger', price: 25000, desc: 'Assassin', imgLink:'https://64.media.tumblr.com/5e995956a11ba23d4b6757988343f7fb/4591b915fd9bd6d8-93/s500x750/d3af99fa647bc0315f793aa65e70d88065028403.pnj'},
        {name: 'Anya Forger', price: 25000, desc: 'Psychic', imgLink:'https://64.media.tumblr.com/65b6fb6f77930d89e6c3f50eac4d608c/d3184c51a0564874-0f/s400x600/4693f50e34dbb4ea082ae41b1ddd9af63895067b.jpg'},

      ]
      
    }
  }
}
</script>

<style>
  .column{
    float: left;
    width: 15%;
    padding: 0 10px;
  }

  .row{
    margin: 0 -5px;
  }

  .row:after{
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 600px){
    .column{
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
</style>
