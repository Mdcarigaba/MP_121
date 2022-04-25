<template>
  <div class='card' id='product-card'>
      <img class = 'card-image' :src="item.imgLink">
      <div class='container'>
      <h4 id='product-name'>{{item.name}}</h4>
      <p id='product-desc'>{{item.desc}}</p>
      <p id='product-desc'>P{{item.price}}</p>
      </div>
      <button class='cardbtn addcart'>
          Add to Cart
      </button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['item'],
}
</script>

<style>
    button{
        outline: none;
    }

    .card{
        margin: 3px;
        width: 200px;
        height: auto;
        border: 2px solid black;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    #product-card:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container{
        padding: 2px;
    }

    .card-image{
        height: 200px;
        width: auto;
    }

    .cardbtn{
         width: 200px;
         border: 1px solid black;
         cursor: pointer;
         transition: all 0.3s ease;
         position: relative;
         display: inline-block;
    }

    .addcart{
        background: #000;
        color: #fff;
        line-height: 42px;
        padding: 0;
        border: none;
    }

    .addcart:hover {
        background: transparent;
        color: #000;
        box-shadow:
        -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001;
    }
    .addcart:before,
    .addcart:after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: #000;
        transition:400ms ease all;
    }
    .addcart:after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    .addcart:hover:before,
    .addcart:hover:after{
        width:100%;
        transition:800ms ease all;
    }

    #product-name{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    #product-desc{
        font-family: 'Corbel';
    }
</style>
