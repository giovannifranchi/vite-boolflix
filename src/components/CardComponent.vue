<template>
    <div>
        <h3>{{ info.title }}</h3>
        <h4>{{ info.original_title }}</h4>
        <CountryFlag :country='handleFlags' size='small'/>
        <h5>{{ getScore }}</h5>
    </div>
</template>

<script>
import CountryFlag from 'vue-country-flag-next';
    export default {
        name: 'CardComponent',
        props: {
            info: {
                type: Object,
                required: true
            }
        },
        components:{
            CountryFlag,
        },
        computed: {
            getScore(){
                return Math.ceil(this.info.vote_average / 2);
            },
            handleFlags(){
                switch(this.info.original_language){
                    case 'en':
                        return 'gb'
                    case 'he':
                        return 'il'
                    case 'ja':
                        return 'jp'
                    default:
                        return this.info.original_language;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>