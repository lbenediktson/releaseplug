<template lang="html">
  <div class="mt-10 container load-clean text-center">
    <h2 class="mb-4 text-center site-title">Admin<span class="rød">/Collections</span></h2>
    <collections-list/>
  </div>
</template>

<script>
import AddCollection from '@/components/chef/collections/AddCollection'
import CollectionsList from '@/components/chef/collections/CollectionsList'

export default {
  name: 'collectionsChef',
  components: {
    AddCollection,
    CollectionsList
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
