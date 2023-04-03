<template>
    <div class="container">
        <div class="row g-5 py-5" v-if="store.filteredMovies.length > 0">
            <div class="col-12 col-md-6 col-lg-4" v-for="movie in store.filteredMovies">
                <CardComponent :info="movie" class="card-clas"/>
            </div>
        </div>
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
.card-clas {
    height: 100%;
    width: 100%;
    border: 1px solid lightgray;
    background-color: #fff;
    // TODO: add overflow hidden or ellipsis to info.overview
}
</style>