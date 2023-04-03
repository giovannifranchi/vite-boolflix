<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="getUrl" alt="Avatar"/>
      </div>
      <div class="flip-card-back d-flex flex-column align-items-start p-3 gap-3">
        <h3><strong>Titolo:</strong>{{ info.title || info.name }}</h3>
        <h4><strong>Titolo Originale:</strong>{{ info.original_title || info.original_name }}</h4>
        <div class="d-flex align-items-center">
          <strong class="align-middle">Lingua Originale:</strong>
          <CountryFlag :country="handleFlags" size="medium" class="ms-1 align-self-center" />
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
          <p>{{ info.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store/store";
import CountryFlag from "vue-country-flag-next";
import axios from "axios";
export default {
  name: "CardFlipComponent",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  components: {
    CountryFlag,
  },
  data() {
    return {
      cast: [],
    };
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
    getUrl() {
      return `${store.apiConfig.imgRoute}${store.apiConfig.poster_sizes.medium}${
        this.info.poster_path ?? store.apiConfig.posterFallback
      }`;
    },
    getActors() {
      const actorNames = [];
      this.cast.forEach((obj) => {
        actorNames.push(obj.name);
      });
      if (actorNames.length > 0) {
        return actorNames.join(", ");
      } else {
        return "N.A.";
      }
    },
  },
  created() {
    axios
      .get(`${store.apiConfig.url}/movie/${this.info.id}/credits`, {
        params: {
          api_key: store.apiConfig.api_key,
        },
      })
      .then((result) => {
        this.cast = result.data.cast.slice(0, 5);
      })
      .catch(() => {
        console.log("not found in cast");
      });
  },
};
</script>

<style lang="scss" scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #000;
  color: white;
  transform: rotateY(180deg);
}

img {
  width: 100%;
  height: 100%;
}
</style>
