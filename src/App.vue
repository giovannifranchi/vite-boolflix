<script>
import AppHeaderVue from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store/store";
import axios from "axios";
export default {
  name: "App",
  components: {
    AppHeaderVue,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchMovie() {
      axios
        .get(store.apiConfig.url + store.apiConfig.gettersPath.pathMovies, {
          params: {
            api_key: store.apiConfig.api_key,
            language: store.apiConfig.defaultLanguage,
            query: store.searchKeyword,
          },
        })
        .then((result) => {
          store.movies = result.data.results;
          store.filteredMovies = store.movies;
        });
      axios
        .get(store.apiConfig.url + store.apiConfig.gettersPath.pathTv, {
          params: {
            api_key: store.apiConfig.api_key,
            language: store.apiConfig.defaultLanguage,
            query: store.searchKeyword,
          },
        })
        .then((result) => {
          store.tv = result.data.results;
          console.log(store.movies);
          console.log(store.tv);
        });
    },
  },
};
</script>

<template>
  <AppHeaderVue @searchHandle="searchMovie" />
  <AppMain />
</template>
