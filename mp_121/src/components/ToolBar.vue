<template>
    <div class='toolbar-card'>
        <div class='btn'>
            <div class='btn-container'>
                Home
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ToolBar'
}
</script>
<style>
    .toolbar-card{
        height: 50px;
        width: auto;
        border: 3px solid rgba(255,128,0,0.5);
    }
    .btn{
        background-color: rgba(255,128,0,0.3);
        font-family: Arial, Helvetica, sans-serif;
        height: 50px;
        text-align: center;
        width: 75px;
        border: 1px solid rgba(255,128,0,0.5);
        transition: all 0.3s ease;
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
</style>
