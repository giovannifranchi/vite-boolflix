<template>
    <AppNavbar :logoImg="logoSrc" @search="$emit('searchHandle')" @changeSelect="$emit('changeSelect')"/>
</template>

<script>
import AppNavbar from './AppNavbar.vue';
    export default {
        name:'AppHeader',
        components:{
            AppNavbar
        },
        emits: ['searchHandle', 'changeSelect'],
        data(){
            return {
                logoSrc: 'src/assets/img/logo-netflix.png'
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>