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
        emits: ['searchHandle', 'changeSelect'],
        data(){
            return {
                logoSrc: 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>