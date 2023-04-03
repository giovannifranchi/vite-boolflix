<template>
  <div class="movie-card">
    <img :src="getUrl" alt="">


    <div class="info-body p-3 d-flex flex-column gap-2">
        <h3 v-if="info.media_type==='movie'"><strong>Titolo:</strong>{{ info.title }}</h3>
        <h3 v-else><strong>Titolo:</strong>{{ info.name }}</h3>
        <h4 v-if="info.media_type==='movie'"><strong>Titolo Originale:</strong>{{ info.original_title }}</h4>
        <h4 v-else><strong>Titolo Originale:</strong>{{ info.original_name }}</h4>
        <div>
            <strong class="align-middle">Lingua Originale:</strong>
            <CountryFlag :country="handleFlags" size="medium"  class="ms-1 align-center"/>
        </div>
        <div>
            <strong>Voto:</strong>
          <font-awesome-icon icon="fa-solid fa-star" v-for="n in getScore" />
          <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getScore" />
        </div>
        <div>
            <strong>Cast:</strong>
            {{ getActors }}
        </div>
        <div class="overview h-auto h-md-25 overflow-auto pe-1">
            <p>{{ info.overview}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store/store';
import CountryFlag from "vue-country-flag-next";
import axios from 'axios';
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
  data(){
    return {
        cast: [],
    }
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
    },
    getActors(){
        const actorNames = [];
        this.cast.forEach((obj)=>{
            actorNames.push(obj.name);
        });
        return actorNames.join(', ');
    }
  },
  mounted(){
    axios.get(`${store.apiConfig.urlCast}/movie/${this.info.id}/credits`, {
        params: {
            api_key: store.apiConfig.api_key,
        }
    })
    .then((result)=> {
        this.cast = result.data.cast.slice(0,5);
    })
  }
};
</script>

<style lang="scss" scoped>
.movie-card {
    position:relative;
    img{
        width: 100%;
        height: 100%;
    }
    &:hover > img {
        opacity: 0;
        transition: opacity .4s ease-out 4ms;
        
    }
    &:hover > .info-body {
        opacity: 1;
    }
    .info-body {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
        transition: opacity .4s ease-in 4ms;
    }

}

</style>
