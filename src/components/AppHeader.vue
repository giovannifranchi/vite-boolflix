<template>
    <AppNavbar :logoImg="logoSrc" @search="$emit('searchHandle')"/>
</template>

<script>
import AppNavbar from './AppNavbar.vue';
    export default {
        name:'AppHeader',
        components:{
            AppNavbar
        },
        emits: ['searchHandle'],
        data(){
            return {
                logoSrc: 'src/assets/img/logo-netflix.png'
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>