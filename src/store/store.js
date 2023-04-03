import { reactive } from "vue";

export const store = reactive({
    apiConfig: {
        urlGenrs: 'https://api.themoviedb.org/3/genre/movie/list?api_key=a847ea9395b412949d66a6859540cccd',
        url: 'https://api.themoviedb.org/3',
        gettersPath: {
            pathMovies: '/search/movie',
            pathTv: '/search/tv',
        },
        api_key: 'a847ea9395b412949d66a6859540cccd',
        defaultLanguage: 'it-IT',
        imgRoute: 'https://image.tmdb.org/t/p/',
        posterFallback: "/z6fUdAWIqSenjIYsPmRltaGHcTq.jpg",
        defaultSearch: 'ritorno',
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
    tv: [],
    searchKeyword: '',
    currentSearch: '',
    inputGenr: '',
    hasSearched: 0,
    isFiltered: false,
    isSearchMovieBusy: true,
    isSearchTvBusy: true,
})