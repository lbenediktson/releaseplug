<template>
  <div>
    <!-- <home-section></home-section> -->
    <section class="load-clean section bg-light">
      <transition-group name="fade" tag="div" class="transition-div">
        <moon-loader v-if="collections == ''" :key="0" :size="'75px'" :margin="'10px'" style="margin-top:225px;width:75px;margin-right:auto;margin-left:auto;text-align:center;" :color="'#FF5858'" :loading="true" class="text-center"/>
        <p v-if="collections == ''" class="text-center col-12" style="margin-top:25px;" :key="1">Loading ..</p>
      </transition-group>
      <div class="mt-4 mb-4 container">
        <div class="row">
            <div class="col-lg-12">
                <div class="bigScreen section-title row">
                    <div class="site-title-wrapper col-6">
                        <h2 class="text-center site-title floatRight">Release</h2>
                    </div>
                    <div class="site-title-wrapper col-6 rød">
                        <h2 class="text-center site-title floatLeft">/Collections</h2>
                    </div>
                </div>
                <div class="smallScreen section-title">
                    <h2 class="text-center site-title">Release<span class="rød">/Collections</span></h2>
                </div>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="port portfolio-masonry mb-3">
          <transition-group name="fadeTrans" tag="div" class="portfolioContainer row">
            <p :key="'noProductsInfo1'" v-if="noCollections" class="light-info-text col-12">No current collections at the moment.</p>
            <p :key="'noProductsInfo2'" v-if="noCollections" class="light-info-text col-12">You can head to our <router-link to="/previous/collections">previous collections</router-link> if you want to see our previously featured collections.</p>
            <collections-grid v-if="collection.date > dateNow" v-for="collection in sortedCollections" :collection="collection" :collection-id="collection.siteTag" :key="collection['.key']"/>
          </transition-group>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebaseApp from '@/assets/DbRef.js'
import { orderBy } from 'lodash'
import CollectionsGrid from '@/components/collections/CollectionsGrid'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
const db = firebaseApp.database()

var collectionsRef = db.ref('collections')

export default {
  name: 'collections',
  components: {
    CollectionsGrid,
    MoonLoader
  },
  data () {
    return {
      noCollections: false,
      collections: [],
      sneakerTransfer: []
    }
  },
  created () {
    this.$bindAsArray('collections', collectionsRef)
  },
  mounted () {
    document.title = 'Release Plug | Collections'
  },
  watch: {
    collections (collections) {
      if (collections !== '') {
        var counter = 0
        for (var i = 0; i < collections.length; i++) {
          if (collections[i].date >= this.dateNow) {
            counter = counter + 1
          }
        }
        if (counter !== 0) {
          this.noCollections = false
        } else {
          this.noCollections = true
        }
      } else {
        this.noCollections = false
      }
    }
  },
  computed: {
    sortedCollections () {
      return orderBy(this.collections, ['date'], ['asc'])
    },
    dateNow () {
      return this.$moment().format('YYYY-MM-DD')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding: 15px 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
