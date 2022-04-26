<template>
  <div class='card' id='product-card'>
      <img class = 'card-image' :src="item.imgLink">
      <h4 id='product-name'>{{item.name}}</h4>
      <p class='truncate' id='product-desc'>{{item.desc}}</p>
      <p id='product-price'>P{{item.price}}</p>
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
        background-color: white;
        margin-top: 10px;
        margin-left: 10px;
        width: 200px;
        height: auto;
        border: 2px solid black;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    #product-card:hover{
        box-shadow: 0 12px 24px 0 rgba(0,0,0,0.5);
    }

    .card-image{
        height: 200px;
        width: auto;
    }

    /*to hide long strings as ellipsis*/
    .truncate{
        width: 200px;
        height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        background: white;
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
        margin: 3px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    #product-desc{
        margin-top: 2px;
        margin-bottom: 5px;
        margin-left: 3px;
        margin-right: 3px;
        font-family: 'Corbel';
    }

    #product-price{
        font-family: 'Corbel';
    }

    @media screen and (max-width: 600px){
    .card{
        width: 85%;
        display: block;
        margin-left: 10%;
    }
    
    .card-image{
        height: auto;
        width: 100%;
    }
    .cardbtn{
        width: 100%;
        height: auto;
    }
    .truncate{
        width: 85%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
  }
</style>
