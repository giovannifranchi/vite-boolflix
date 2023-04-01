import { reactive } from "vue";

export const store = reactive({
    apiConfig: {
        url: 'https://api.themoviedb.org/3/search/movie',
        api_key: 'a847ea9395b412949d66a6859540cccd',
        defaultLanguage: 'it-IT',
        searchKey: '',
    },
    movies: [],
    searchKeyword: '',
    inputLanguage: '',
})