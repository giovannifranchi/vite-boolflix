<template>
  <nav class="navbar bg-dark py-3" data-bs-theme="dark">
    <div class="container gap-3">
      <a class="navbar-brand">
        <img :src="logoImg" alt="Logo" width="150" height="40">
      </a>
      <div class="d-flex flex-grow-1" role="search">
        <input class="form-control me-2 search-nav" type="search" placeholder="Search" aria-label="Search" v-model="store.searchKeyword" @keyup.enter="$emit('search')"/>
      </div>
      <SelectComponent class="w-auto"/>
    </div>
  </nav>
</template>

<script>
import {store} from '../store/store'
import SelectComponent from './SelectComponent.vue';
export default {
    name: 'AppNavbar',
    props: {
        logoImg: {
            type: String,
            required: true,
        }
    },
    components: {
        SelectComponent
    },
    emits: ['search'],
    data(){
        return {
            store
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
