import { reactive } from "vue";

export const store = reactive({
    apiConfig: {
        url: 'https://api.themoviedb.org/3/search/multi',
        api_key: 'a847ea9395b412949d66a6859540cccd',
        defaultLanguage: 'it-IT',
        imgRoute: 'https://image.tmdb.org/t/p/',
        posterFallback: "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
        poster_sizes: {
            xxSmall: 'w92',
            xSmall: 'w154',
            small: 'w185',
            medium: 'w342',
            large: 'w500',
            xLarge: 'w780',
            original: 'original'
        }
    },
    movies: [],
    searchKeyword: '',
    inputLanguage: '',
})