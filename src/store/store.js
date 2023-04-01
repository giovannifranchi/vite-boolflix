import { reactive } from "vue";

export const store = reactive({
    movies: [],
    searchKeyword: '',
    inputLanguage: '',
})