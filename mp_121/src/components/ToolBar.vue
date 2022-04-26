<template>
    <div class='toolbar-card'>
        
        <button @click="$router.push('/')" class='btn' type='click'>
            Home
        </button>
        <input class='searchBar' placeholder="Search">
        <button class='btn'>
            Search
        </button>
        <button class='btn' id='leftBtn'>
                Cart
        </button>
        
        <!--Shorthand for router-link-->
        <button @click="$router.push('login')" class='btn' id='leftBtn'> 
            Sign in
        </button>
    </div>
</template>
<script>
export default {
    name: 'ToolBar'
}
</script>
<style>
    .input{
        height: 10px;
    }

    .button{
        border: none;
    }

    .toolbar-card{
        top: -1px;
        position: sticky;
        margin-top: -10px;
        height: 50px;
        width: auto;
        border: 4px solid rgb(44,44,84);
        background-color: rgba(44,44,84);
    }
    .searchBar{
        margin: 2px;
    }
    .links:link{
        color:black;
        text-decoration: none;
    }
    .links:visited{
        color:black;
    }
    .btn{
        background-color: rgb(115, 164, 216);
        font-family: Arial, Helvetica, sans-serif;
        height: 50px;
        outline: none;
        border: none;
        text-align: center;
        width: 75px;
        transition: all 0.3s ease;
        margin: 0 1px;
        border-radius: 4px;
    }

    .btn:hover{
        box-shadow: -7px -7px 20px 0px #fff9,
        -4px -4px 5px 0px #fff9,
        7px 7px 20px 0px #0002,
        4px 4px 5px 0px #0001;
    }

    .btn-container{
        padding: 12.5px;
    }

    #leftBtn{
        left: 1017px;
        position: relative;
    }

    @media screen and (max-width: 700px) {
        .toolbar-card{
            top: 0;
            position: -webkit-sticky;
            position: sticky;
            width: 100%;
            display: block;
        }

        .btn{
            text-size-adjust: 80%;
            width: 15%;
        }

        #leftBtn{
            left: 0%;
        }

        input{
            width:30%;
        }
    }
</style>
