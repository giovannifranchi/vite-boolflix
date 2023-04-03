<template>
  <div class="input-group mb-3">
    <label class="input-group-text" for="inputGroupSelect01">Generes</label>
    <select class="form-select" id="inputGroupSelect01" @change="$emit('changeSelect')" v-model="store.inputGenr">
      <option selected value="none">All...</option>
      <option v-for="genre in genrs" :value="genre.id">{{ genre.name }}</option>
    </select>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store/store";
export default {
  name: "SelectComponent",
  emits: ["changeSelect"],
  data() {
    return {
      store,
      genrs: [],
    };
  },
  created() {
    axios
      .get(store.apiConfig.urlGenrs, {
        params: {
          api_key: store.apiConfig.api_key,
          language: store.apiConfig.defaultLanguage
        },
      })
      .then((result) => {
        this.genrs = result.data.genres;
      });
  },
};
</script>

<style lang="scss" scoped></style>
