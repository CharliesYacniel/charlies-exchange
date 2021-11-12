<template>
    <div>
        <bounce-loader 
        class="custom-class" 
        :color="'#bada55'" 
        :loading="isLoading" 
        :size="100" ></bounce-loader>
        <px-assets-table v-if="!isLoading" :assets=assets></px-assets-table>
    </div>
</template>

<script>

import PxAssetsTable from '@/components/PxAssetsTable'
import { BarLoader } from '@saeris/vue-spinners'

import api from "@/api"
export default {
    name:'Home',
    components:{
        api,
        BarLoader,
        PxAssetsTable
    } ,
    data(){
        return {
            assets:[],
            isLoading: true
        }
    },
   
   
    created(){
        this.isLoading = true
        api.getAssets()
        .then(assets=>this.assets = assets)
        .finally(()=>{
            this.isLoading = false
        })
    }
}
</script>
