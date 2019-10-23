<template>
  <div>
     <ListBodyBargin></ListBodyBargin>
     <ListBodyMoods></ListBodyMoods>
     <ListBodyRecommend></ListBodyRecommend>
  </div>
</template>

<script>
import ListBodyBargin from './list-body-bargin'
import ListBodyMoods from './list-body-moods'
import ListBodyRecommend from './list-body-recommend'
export default {
    components:{
        ListBodyBargin,
        ListBodyMoods,
        ListBodyRecommend 
    }

}
</script>

<style>

</style>