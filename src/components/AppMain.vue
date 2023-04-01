<template>
    <div>
        <CardComponent v-for="movie in store.movies" :info="movie"/>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../store/store';
    export default {
        name: 'AppMain',
        components: {
            CardComponent
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>