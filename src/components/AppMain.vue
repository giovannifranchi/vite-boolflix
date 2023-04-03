<template>
    <SelectComponent @change-select="changeSelect"/>
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
import SelectComponent from "./SelectComponent.vue";
import CardComponent from "./CardComponent.vue";
import CardFlipComponent from "./CardFlipComponent.vue";
import { store } from "../store/store";
export default {
  name: "AppMain",
  components: {
    CardComponent,
    CardFlipComponent,
    SelectComponent
  },
  data() {
    return {
      store,
      isFilter: false,
    };
  },
  computed: {
    getResults(){
        const results = [...store.movies, ...store.tv]
        if(!this.isFilter || store.inputGenr === 'none'){
            return results
        }else {
            return results.filter((result)=> {
                return result.genre_ids.includes(store.inputGenr);
            })
        }
    }
  },
  methods: {
    changeSelect(){
        this.isFilter = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-col {
  aspect-ratio: 1 / 1.5;
}
</style>
