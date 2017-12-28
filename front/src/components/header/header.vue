<template>
    <header class="header">
        <h1>个人博客</h1>
        <ul v-for="(v,k) in data" :key="k" >
            <li @click="change(v.path)">{{v.name}}</li>
        </ul>
    </header>
</template>

<script>
import data from '../../data/titRouter'
export default {
    name:'header',
    data(){
        return {
            data
        }
    },
    methods:{
        change(path){
            this.$router.push(path)
        }
    }
}
</script>

<style>
    .header {
        width:100%;
        background: yellow;
        display: flex;
    }
    .header h1 {
        height: 4.5rem;
        line-height: 4.5rem;
        text-indent: 1rem;
        color:blue;
        font-size: 1.5rem;
    }
    .header ul{
        margin-left:2rem;
        width:3rem;
        display: flex;
        justify-content: space-around;
    }
    .header ul li {
        line-height: 4.5rem;
    }
</style>
