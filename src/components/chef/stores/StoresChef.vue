<template lang="html">
  <div class="mt-10 container load-clean text-center">
    <h2 class="mb-4 text-center site-title">Admin<span class="rød">/Stores</span></h2>
    <store-list/>
  </div>
</template>

<script>
import AddStore from '@/components/chef/stores/AddStore'
import StoreList from '@/components/chef/stores/StoresList'

export default {
  name: 'sneakersChef',
  components: {
    AddStore,
    StoreList
  }
}
</script>

<style lang="css" scoped>
.fa-plus-circle {
  color: #ff5858;
}
.portfolio-img-middle {
  margin-right: auto;
  margin-left: auto;
  font-size: 100px;
  margin-top: 30px;
}
@media (max-width: 450px) {
  .portfolio-img-middle {
    font-size: 75px;
    margin-top: 30px;
  }
}
</style>
