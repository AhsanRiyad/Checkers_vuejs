<template>
    <div class="job_search">
        <input type="text" placeholder="Search Jobs ...">
        <button>Search</button>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped lang="scss">
.job_search{
    display: flex;
    input{
        width: calc(100% - 100px);
        font-size: 16px;
        height: 46px;
        padding: 0 20px;
        border-radius: 0;
        display: inline-block;
        background: #e2e2e2;
        border: none;
        &:active, &:focus, &:hover{
            outline: none;
        }
    }
    button{
        width: 100px;
        border-radius: 0;
        display: inline-block;
        border: none;
        box-shadow: none;
        outline: none;
        background: #6f9ae8;
        color: #fff;
        font-size: 18px;
        text-align: center;
        cursor: pointer;
        transition: all .4s ease;
        &:hover{
            background: #365899;
        }
    }
}
</style>