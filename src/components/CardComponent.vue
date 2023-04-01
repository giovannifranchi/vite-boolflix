<template>
  <div>
    <img :src="getUrl" alt="">
    <h3 v-if="info.media_type==='movie'">{{ info.title }}</h3>
    <h3 v-else>{{ info.name }}</h3>
    <h4 v-if="info.media_type==='movie'">{{ info.original_title }}</h4>
    <h4 v-else>{{ info.original_name }}</h4>
    <CountryFlag :country="handleFlags" size="small" />
    <div>
      <font-awesome-icon icon="fa-solid fa-star" v-for="n in getScore" />
      <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getScore" />
    </div>
  </div>
</template>

<script>
import { store } from '../store/store';
import CountryFlag from "vue-country-flag-next";
export default {
  name: "CardComponent",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  components: {
    CountryFlag,
  },
  computed: {
    getScore() {
      return Math.ceil(this.info.vote_average / 2);
    },
    handleFlags() {
      switch (this.info.original_language) {
        case "en":
          return "gb";
        case "he":
          return "il";
        case "ja":
          return "jp";
        default:
          return this.info.original_language;
      }
    },
    getUrl(){
        return `${store.apiConfig.imgRoute}${store.apiConfig.poster_sizes.medium}${this.info.poster_path ?? store.apiConfig.posterFallback}`;
    }
  },
};
</script>

<style lang="scss" scoped></style>
