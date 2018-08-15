<template lang="html">
  <div class="portfolioContainer row">

    <!-- Moon Loader -->
    <transition-group name="fade" tag="div" class="transition-div">
      <moon-loader v-if="collections == ''" :key="0" :size="'75px'" :margin="'10px'" style="margin-top:225px;width:75px;margin-right:auto;margin-left:auto;text-align:center;" :color="'#FF5858'" :loading="true" class="text-center"/>
      <p v-if="collections == ''" class="text-center col-12" style="margin-top:25px;" :key="1">Loading ..</p>
    </transition-group>

    <!-- ADD STORE BOX -->
    <div class="list-complete-item filter-item collectionBox col-md-4 col-xl-4 col-6">
      <router-link to="/admin/collection/new">
        <div class="portfolio-box">
          <!-- :style="'background-image: url(' + collection.imgUrl + ');'" -->
          <div class="portfolio-box-img">
            <p class="portfolio-img-middle">
              <!-- <i class="fa fa-plus-circle"></i> -->
              <i class="material-icons" style="font-size:125px;color:#ff5858;">add_circle</i>
            </p>
            <!-- <p class="collectionDate">{{ collection.date | moment("MMMM D") }}</p> -->
          </div>
          <div class="gallary-title text-center">
            <h6 class="productTitle">
              <!-- <router-link :to="{ name: 'collection', params: { id: collectionId }}"> -->
              Add New Collection
              <!-- </router-link> -->
            </h6>
            <span class="productPrice"></span>
          </div>
        </div>
        <!-- <router-link :to="{name: 'collection', params: { id: collectionId }}"> -->
      </router-link>
    </div>

    <!-- STORES LOOP BOX -->
    <div v-if="collection.title" v-for="collection in collections" :collection="collection" :collection-id="collection['.key']" :key="collection['.key']" class="list-complete-item filter-item collectionBox col-md-4 col-xl-4 col-6">
      <router-link :to="{ name: 'collectionEdit', params: { id: collection['.key'] } }">
        <div class="portfolio-box">
          <div :style="'background-image: url(' + collection.imgUrl + ');'" class="portfolio-box-img">
            <p class="productDate">{{ collection.date | moment("MMMM D") }}</p>
          </div>
          <div class="gallary-title text-center">
            <h6 class="productTitle">
              <!-- <router-link :to="{ name: 'collection', params: { id: collectionId }}"> -->
              {{ collection.title }}
              <!-- </router-link> -->
            </h6>
            <span class="productPrice">{{ collection.price }}€</span>
          </div>
        </div>
        <!-- <router-link :to="{name: 'collection', params: { id: collectionId }}"> -->
      </router-link>
    </div>

  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { orderBy } from 'lodash'
const db = firebaseApp.database()

var collectionsRef = db.ref('collections')

export default {
  name: 'collectionsList',
  // firebase: {
  //   collections: collectionsRef
  // },
  data () {
    return {
      newCollection: {
        collectionId: '',
        link: '',
        collections: []
      }
    }
  },
  created () {
    document.title = 'Release Plug | Collections'
    // FILTER GEM
    this.$bindAsArray('collections', collectionsRef)
  },
  computed: {
    sortedCollections () {
      return orderBy(this.collections, ['name'], ['desc'])
    },
    dateNow () {
      return this.$moment().format('YYYY-MM-DD')
    }
  },
  methods: {
    addCollectionLink () {
      console.log(this.newCollection.id)
      // console.log(event.target.find(':selected').text())
      console.log()
      // db.ref('collections/' + this.collection.id).push(this.newCollection)
    }
  },
  components: {
    MoonLoader
  }
}
</script>

<style lang="css" scoped>
ul.list-group-flush {
  padding-left: 0 !important;
}
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
