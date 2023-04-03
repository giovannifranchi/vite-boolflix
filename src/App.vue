<script>
import AppHeaderVue from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store/store';
import axios from 'axios';
  export default {
    name: 'App',
    components: {
      AppHeaderVue,
      AppMain
    },
    data(){
      return{
        store
      }
    },
    methods: {
      searchMovie(){
        axios.get(store.apiConfig.url,{
          params:{
            api_key: store.apiConfig.api_key,
            language: store.apiConfig.defaultLanguage,
            query: store.searchKeyword
          }
        })
        .then((result)=> {
          store.movies = result.data.results;
          store.filteredMovies = store.movies;
          if(store.inputGenr !== 'none'){
            this.filterMovies();
          }
          store.searchKeyword = '';
        })
      },
      filterMovies(){
        store.filteredMovies = store.movies.filter((movie)=>{
          return movie.genre_ids.includes(store.inputGenr);
        });
        console.log(store.filteredMovies);
      }
    }
  }
</script>

<template>
  <AppHeaderVue @searchHandle="searchMovie" @changeSelect="filterMovies"/>
  <AppMain/>
</template>



