<template>
  <div class='cartCard'>
      <div><h4 id="cart-header"> Your Cart </h4></div>
      <ul class="cart-ul">
          <li v-for="item in cartList" :key='item' style="font-family: 'Corbel';">{{item.name}}&emsp;    x {{item.qty}}     {{item.price}}</li>
      </ul>
      <button class='cartCardbtn checkout' @click="emptyCart">Empty Cart</button>
      <button class='cartCardbtn checkout'>Checkout</button>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  props: ['cartList'],
  methods:{
      emptyCart(){
          this.$emit('emptyCart')
      }
  }
}
</script>

<style>

    .cartCard{
        position: absolute;
        right: 35px;
        background-color: white;
        margin-top: 10px;
        margin-left: 10px;
        width: 200px;
        height: auto;
        border: 2px solid black;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .cart-ul{
        margin-left: 0;
    }

    #product-cartCard:hover{
        box-shadow: 0 12px 24px 0 rgba(0,0,0,0.5);
    }

    /*to hide long strings as ellipsis*/
    .truncate{
        text-align: left;
        width: 200px;
        height: 20px;
        font-family: 'Corbel';
        left: 0px;
    }

    .cartCardbtn{
         width: 200px;
         border: 1px solid black;
         cursor: pointer;
         transition: all 0.3s ease;
         position: relative;
         display: inline-block;
    }

    .checkout{
        background: #000;
        color: #fff;
        line-height: 42px;
        padding: 0;
        border: none;
    }

    .checkout:hover {
        background: white;
        color: #000;
        box-shadow:
        -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001;
    }
    .checkout:before,
    .checkout:after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: #000;
        transition:400ms ease all;
    }
    .checkout:after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    .checkout:hover:before,
    .checkout:hover:after{
        width:100%;
        transition:800ms ease all;
    }

    #cart-header{
        text-align: center;
        margin: 3px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    #product-price{
        font-family: 'Corbel';
    }

    @media screen and (max-width: 600px){
    .cartCard{
        width: 85%;
        display: block;
        margin-left: 10%;
    }
    .cartCardbtn{
        width: 100%;
        height: auto;
    }
  }
</style>