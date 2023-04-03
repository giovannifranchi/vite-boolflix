<template>
  <nav class="navbar bg-dark py-3" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand">
        <img :src="logoImg" alt="Logo" width="70" height="40">
      </a>
      <!-- <SelectComponent @change-select="$emit('changeSelect')"/> -->
      <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchKeyword"/>
        <button class="btn btn-outline-success" type="button" @click="$emit('search')">Search</button>
      </div>
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
    emits: ['search', 'changeSelect'],
    data(){
        return {
            store
        }
    }
};
</script>

<style lang="scss" scoped></style>
