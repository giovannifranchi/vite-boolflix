<template>
  <div class="container">
    <div class="row g-5 py-5" v-if="getResults.length > 0 && !isBusy">
      <div v-if="store.hasSearched > 1">
        <div type="button" class="btn btn-primary position-relative active">
          {{ store.currentSearch }}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ getResults.length }}
          </span>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 card-col" v-for="movie in getResults">
        <CardFlipComponent :info="movie" />
      </div>
    </div>
    <div v-else-if="isBusy">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>No Results Found...</div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import CardFlipComponent from "./CardFlipComponent.vue";
import { store } from "../store/store";
export default {
  name: "AppMain",
  components: {
    CardComponent,
    CardFlipComponent,
  },
  data() {
    return {
      store,
      isFilter: false,
    };
  },
  computed: {
    getResults() {
      const results = [...store.movies, ...store.tv];
      if (!store.isFiltered || store.inputGenr === "none") {
        return results;
      } else {
        return results.filter((result) => {
          return result.genre_ids.includes(store.inputGenr);
        });
      }
    },
    isBusy() {
      if (!store.isSearchMovieBusy && !store.isSearchTvBusy) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-col {
  aspect-ratio: 1 / 1.5;
}
</style>
