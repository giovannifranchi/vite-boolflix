<template>

  <div class="container">
    <div class="row g-5 py-5" v-if="getResults.length > 0 && !store.isSearchBusy">
      <div class="col-12 col-md-6 col-lg-4 card-col" v-for="movie in getResults">
        <CardFlipComponent :info="movie" />
      </div>
    </div>
    <div v-else-if="store.isSearchBusy">
        spinner
    </div>
    <div v-else> not found</div>
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
    };
  },
  computed: {
    getResults(){
        return [...store.movies, ...store.tv];
    }
  }
};
</script>

<style lang="scss" scoped>
.card-col {
  aspect-ratio: 1 / 1.5;
}
</style>
